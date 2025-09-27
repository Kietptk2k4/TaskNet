import { useState } from "react";
import axios from "axios";

function TaskForm({ onAdded }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = async () => {
    if (!title.trim()) return alert("Vui lòng nhập tiêu đề!");

    await axios.post("http://localhost:5000/api/tasks", {
      title,
      dueDate,
      status: false,
    });

    setTitle("");
    setDueDate("");
    onAdded(); // callback để reload danh sách
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nhập công việc..."
        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-2 py-2 border rounded-lg"
      />
      <button
        onClick={addTask}
        className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
      >
        ➕ Thêm
      </button>
    </div>
  );
}

export default TaskForm;
