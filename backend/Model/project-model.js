import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    default: ""
  },
  
  skills: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
    }
  ]
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const projectModel = mongoose.model("Project", projectSchema);

export default projectModel;
