import { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

const API_BASE = import.meta.env.VITE_API_BASE;

function Home() {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({ completed: 0, pending: 0 });

  const [status, setStatus] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  // Load tasks
  const loadTasks = async () => {
    const queryObj = { page, limit: 5 };
    if (status !== "") queryObj.status = status;
    if (from) queryObj.from = from;
    if (to) queryObj.to = to;

    const query = new URLSearchParams(queryObj).toString();

    const res = await axios.get(`${API_BASE}/tasks?${query}`);
    setTasks(res.data.tasks || []);
    setPages(res.data.pages || 1);
  };

  // Load stats
  const loadStats = async () => {
    const res = await axios.get(`${API_BASE}/tasks/stats`);
    setStats(res.data);
  };

  useEffect(() => {
    loadTasks();
    loadStats();
  }, [page, status, from, to]);

  // Toggle trạng thái
  const toggleTask = async (id, current) => {
    await axios.put(`${API_BASE}/tasks/${id}`, { status: !current });
    loadTasks();
    loadStats();
  };

  // Xóa task
  const deleteTask = async (id) => {
    await axios.delete(`${API_BASE}/tasks/${id}`);
    loadTasks();
    loadStats();
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
          📋 TaskNest - Home
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded shadow text-center">
            <p className="font-semibold">✅ Hoàn thành</p>
            <p className="text-2xl">{stats.completed}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">
            <p className="font-semibold">⏳ Chưa xong</p>
            <p className="text-2xl">{stats.pending}</p>
          </div>
        </div>

        {/* Form thêm mới */}
        <TaskForm
          onAdded={() => {
            loadTasks();
            loadStats();
          }}
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 items-center">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="">-- Tất cả --</option>
            <option value="true">Hoàn thành</option>
            <option value="false">Chưa xong</option>
          </select>

          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="px-2 py-2 border rounded"
          />
          <span>→</span>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="px-2 py-2 border rounded"
          />

          <button
            onClick={() => {
              setStatus("");
              setFrom("");
              setTo("");
              setPage(1);
              loadTasks(); // ✅ refresh ngay khi reset
            }}
            className="px-3 py-2 bg-gray-400 text-white rounded"
          >
            ❌ Reset
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            Không có công việc nào ✨
          </p>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            ◀️ Trước
          </button>
          <span>
            Trang {page}/{pages}
          </span>
          <button
            disabled={page >= pages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Sau ▶️
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
