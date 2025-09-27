// src/components/TaskItem.jsx
import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded shadow">
      <span
        className={`flex-1 ${
          task.status ? "line-through text-gray-400" : "text-gray-700"
        }`}
      >
        {task.title}{" "}
        {task.dueDate && (
          <span className="text-sm text-gray-500">
            ({task.dueDate.substring(0, 10)})
          </span>
        )}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task._id, task.status)}
          className={`px-3 py-1 text-sm font-semibold rounded-lg shadow transition ${
            task.status
              ? "bg-yellow-400 hover:bg-yellow-500 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {task.status ? "↩️ Hoàn tác" : "✅ Hoàn thành"}
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="px-3 py-1 text-sm font-semibold bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
        >
          🗑️ Xoá
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
