import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  lastUsed: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  project: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    }
  ]
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const skillModel = mongoose.model("Skill", skillSchema);

export default skillModel;
