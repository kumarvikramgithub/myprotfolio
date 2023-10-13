import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    default: "",
  },
  logo_url: {
    type: String,
    default: "",
  },
   info: {
    type: Array,
    default: []
  }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;