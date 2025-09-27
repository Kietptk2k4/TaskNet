// middleware/validateTask.js
export const validateTask = (req, res, next) => {
  const { title, dueDate } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ success: false, message: "Title is required" });
  }

  if (dueDate && isNaN(new Date(dueDate).getTime())) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid dueDate format" });
  }

  next();
};
