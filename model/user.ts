import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
