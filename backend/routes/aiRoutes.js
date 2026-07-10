import express from "express";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import {
  analyzeSkills,
  analyzeResume,
  generateInterviewQuestions,
  careerRecommendation,
  generateRoadmap,
  recommendJobs,
  recommendProjects,
  chatWithAI,
  recommendCourses,
} from "../controllers/aiController.js";

const router = express.Router();

// Skill Analyzer
router.post("/analyze", protect, analyzeSkills);

// Resume Analyzer
router.post(
  "/resume",
  protect,
  upload.single("resume"),
  analyzeResume
);

// Interview Questions
router.post("/interview", protect, generateInterviewQuestions);

// Career Recommendation
router.post("/career", protect, careerRecommendation);

// Learning Roadmap
router.post("/roadmap", protect, generateRoadmap);

// Job Recommendation
router.post("/jobs", protect, recommendJobs);

// Project Recommendation
router.post("/projects", protect, recommendProjects);

// AI Chatbot
router.post("/chat", protect, chatWithAI);
router.post("/courses",protect,recommendCourses);


export default router;