import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // ✅ Cho phép tất cả domain gọi API
app.use(express.json());
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => {
  res.send("✅ TaskNest Backend is running!");
});

// MongoDB connect
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/tasks", taskRoutes);
