import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
dotenv.config();
console.log("JWT:", process.env.JWT_SECRET);
console.log("Gemini:", process.env.GEMINI_API_KEY);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("RoctVerse AI Backend Running 🚀");
});

app.get("/test", (req, res) => {
  res.send("Test Route Working 🚀");
});



app.get("/", (req, res) => {
  res.send("RoctVerse AI Backend Running 🚀");
});

app.get("/test", (req, res) => {
  res.send("Test Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});