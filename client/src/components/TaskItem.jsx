import api from "../api";

function TaskItem({ task, refresh }) {
  const toggle = async () => {
    await api.put(`/tasks/${task._id}`, { status: !task.status });
    refresh();
  };

  const remove = async () => {
    await api.delete(`/tasks/${task._id}`);
    refresh();
  };

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
          onClick={toggle}
          className={`px-3 py-1 text-sm rounded ${
            task.status
              ? "bg-yellow-400 hover:bg-yellow-500 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {task.status ? "↩️ Hoàn tác" : "✅ Hoàn thành"}
        </button>
        <button
          onClick={remove}
          className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
        >
          🗑️ Xoá
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
