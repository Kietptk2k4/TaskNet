import Task from "../models/task.model.js";

// CREATE
export const createTask = async (req, res) => {
  try {
    const { title, status, dueDate } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const task = await Task.create({ title, status, dueDate });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ (with filter + pagination)
export const getTasks = async (req, res) => {
  try {
    const { status, from, to, page = 1, limit = 5 } = req.query;

    const query = {};
    if (status !== undefined) query.status = status === "true";
    if (from || to) {
      query.dueDate = {};
      if (from) query.dueDate.$gte = new Date(from);
      if (to) query.dueDate.$lte = new Date(to);
    }

    const skip = (page - 1) * limit;
    const total = await Task.countDocuments(query);
    const tasks = await Task.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.json({
      tasks,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// STATS
export const getStats = async (req, res) => {
  try {
    const completed = await Task.countDocuments({ status: true });
    const pending = await Task.countDocuments({ status: false });
    res.json({ completed, pending });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
