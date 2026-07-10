import express from "express";
import {
  addSkill,
  getSkills,
  deleteSkill,
} from "../controllers/skillController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addSkill);
router.get("/", protect, getSkills);
router.delete("/:id", protect, deleteSkill);

export default router;