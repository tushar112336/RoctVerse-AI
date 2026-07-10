import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    skills: [String],

    experience: Number,

    goal: String,

    result: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Skill", skillSchema);