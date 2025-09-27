import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL, // cho phép FE gọi API
    credentials: true,
  })
);

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
import taskRoutes from "./routes/task.routes.js";
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 TaskNet Backend running!");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
