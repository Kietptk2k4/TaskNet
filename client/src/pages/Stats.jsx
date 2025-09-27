import { useEffect, useState } from "react";
import axios from "axios";

function Stats() {
  const [stats, setStats] = useState({ completed: 0, pending: 0 });

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks/stats").then((res) => setStats(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📊 Thống kê</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 p-4 rounded-lg text-center shadow">
          <p className="font-semibold">✅ Hoàn thành</p>
          <p className="text-3xl">{stats.completed}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center shadow">
          <p className="font-semibold">⏳ Chưa xong</p>
          <p className="text-3xl">{stats.pending}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
