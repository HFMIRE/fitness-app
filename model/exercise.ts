import { Schema, model, models } from "mongoose";

const exerciseSchema = new Schema({
  name: String,
  type: String,
  difficulty: String,
  muscle: String,
  equipment: String,
  instructions: String,
});
const Exercise = models.Exercise || model("Exercise", exerciseSchema);

export default Exercise;
