import { Schema, model, models } from "mongoose";

const logSchema = new Schema(
  {
    excerise: String,
    duration: Number,
    distance: Number,
  },
  { timestamps: true }
);
const Log = models.Log || model("Log", logSchema);

export default Log;
