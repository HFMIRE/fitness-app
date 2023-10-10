import { Schema, model, models } from "mongoose";

const healthMetricSchema = new Schema({
  weight: Number,
  height: Number,
  level: {
    type: String,
    enum: ["SEDENTARY", "LIGHTLY_ACTIVE", "MODERATELY_ACTIVE", "VERY_ACTIVE"],
    default: "SEDENTARY",
  },
});
const HealthMetric =
  models.HealthMetric || model(" HealthMetric", healthMetricSchema);

export default HealthMetric;
