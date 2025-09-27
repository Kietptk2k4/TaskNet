// import axios from "axios";
// import { useState } from "react";

// function TaskItem({ task, refresh }) {
//   const [editing, setEditing] = useState(false);
//   const [title, setTitle] = useState(task.title);
//   const [dueDate, setDueDate] = useState(task.dueDate ? task.dueDate.substring(0, 10) : "");

//   const toggle = async () => {
//     await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
//       status: !task.status,
//     });
//     refresh();
//   };

//   const remove = async () => {
//     await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
//     refresh();
//   };

//   const save = async () => {
//     await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { title, dueDate });
//     setEditing(false);
//     refresh();
//   };

//   return (
//     <li className="flex flex-col gap-2 bg-gray-50 px-4 py-2 rounded-lg shadow">
//       {editing ? (
//         <div className="flex gap-2">
//           <input value={title} onChange={(e) => setTitle(e.target.value)} className="flex-1 px-2 py-1 border rounded" />
//           <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="px-2 py-1 border rounded" />
//           <button onClick={save} className="px-3 py-1 bg-green-500 text-white rounded">💾</button>
//           <button onClick={() => setEditing(false)} className="px-3 py-1 bg-gray-400 text-white rounded">❌</button>
//         </div>
//       ) : (
//         <div className="flex justify-between items-center">
//           <span className={task.status ? "line-through text-gray-400" : "text-gray-700"}>
//             {task.title} {task.dueDate && <span className="text-sm text-gray-500">({task.dueDate.substring(0, 10)})</span>}
//           </span>
//           <div className="flex gap-2">
//             <button onClick={toggle} className={`px-3 py-1 text-sm rounded ${task.status ? "bg-yellow-400" : "bg-blue-500"} text-white`}>
//               {task.status ? "↩️ Hoàn tác" : "✅ Hoàn thành"}
//             </button>
//             <button onClick={() => setEditing(true)} className="px-3 py-1 text-sm bg-purple-500 text-white rounded">✏️ Sửa</button>
//             <button onClick={remove} className="px-3 py-1 text-sm bg-red-500 text-white rounded">🗑️ Xoá</button>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// }
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
          className={`px-3 py-1 text-sm rounded ${
            task.status
              ? "bg-yellow-400 hover:bg-yellow-500 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {task.status ? "↩️ Hoàn tác" : "✅ Hoàn thành"}
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
        >
          🗑️ Xoá
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
