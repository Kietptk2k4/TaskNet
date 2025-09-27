import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getStats,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/stats", getStats);

export default router;
