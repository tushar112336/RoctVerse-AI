import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // ================= Basic Info =================

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "https://i.pravatar.cc/200",
    },

    phone: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "Student",
    },

    careerGoal: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    // ================= Education =================

    education: {
      college: {
        type: String,
        default: "",
      },

      degree: {
        type: String,
        default: "",
      },

      branch: {
        type: String,
        default: "",
      },

      year: {
        type: String,
        default: "",
      },

      cgpa: {
        type: String,
        default: "",
      },
    },

    // ================= Social Links =================

    github: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    portfolio: {
      type: String,
      default: "",
    },

    // ================= Skills =================

    skills: {
      type: [String],
      default: [],
    },

    // ================= Certificates =================

    certificates: {
      type: [String],
      default: [],
    },

    // ================= Dashboard Scores =================

    careerScore: {
      type: Number,
      default: 0,
    },

    resumeScore: {
      type: Number,
      default: 0,
    },

    learningProgress: {
      type: Number,
      default: 0,
    },

    learningStreak: {
      type: Number,
      default: 0,
    },
    
    resumeHistory: [
  {
    atsScore: Number,
    fileName: String,
    analyzedAt: {
      type: Date,
      default: Date.now,
    },
  },
],

    // ================= Login Tracking =================

    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);