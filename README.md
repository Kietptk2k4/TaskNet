# ✅ TaskNet - Task Management App

Ứng dụng quản lý công việc (Task Management) được xây dựng với **MERN Stack**.  
Người dùng có thể thêm mới, cập nhật trạng thái, xóa task, và theo dõi thống kê.

---

## 🚀 Demo

- **Frontend (Vercel):** [https://task-net-five.vercel.app](https://task-net-five.vercel.app)  
- **Backend (Render):** [https://tasknet-gwcg.onrender.com](https://tasknet-gwcg.onrender.com)

---

## 🛠 Công nghệ sử dụng

- **Frontend:** React + Vite + TailwindCSS  
- **Backend:** Node.js + Express  
- **Database:** MongoDB Atlas  
- **Triển khai:** Render (BE) + Vercel (FE)

---

## 📂 Cấu trúc dự án

```

TaskNet/
├── client/       # React frontend
│   ├── src/
│   │   ├── components/   # TaskForm, TaskItem
│   │   ├── pages/        # Home, Stats, NotFound
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── server/       # Express backend
├── controllers/  # task.controller.js
├── models/       # Task model
├── routes/       # task.routes.js
├── middleware/   # validateTask.js
├── server.js
└── package.json

````

---

## ⚙️ Cách chạy local

### 1. Clone repo
```bash
git clone https://github.com/your-username/TaskNet.git
cd TaskNet
````

### 2. Cài đặt dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### 3. Tạo file `.env` trong **server/**

```env
PORT=5000
MONGO_URI=mongodb+srv://<your-mongo-uri>
CLIENT_URL=http://localhost:5173
```

### 4. Chạy project

```bash
# Terminal 1 - chạy backend
cd server
npm start

# Terminal 2 - chạy frontend
cd client
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint           | Mô tả                              |
| ------ | ------------------ | ---------------------------------- |
| GET    | `/api/tasks`       | Lấy danh sách task                 |
| POST   | `/api/tasks`       | Tạo task mới                       |
| PUT    | `/api/tasks/:id`   | Cập nhật trạng thái task           |
| DELETE | `/api/tasks/:id`   | Xóa task                           |
| GET    | `/api/tasks/stats` | Lấy thống kê task (done/chưa xong) |

---

## 📸 Tính năng nổi bật

* ✍️ **Thêm** công việc mới với deadline
* ✅ **Đánh dấu hoàn thành** hoặc bỏ hoàn thành
* 🗑 **Xóa** công việc
* 🔎 **Lọc** theo trạng thái (tất cả, hoàn thành, chưa hoàn thành)
* 📊 **Thống kê** số lượng công việc

---

## 🌐 Triển khai

* **Backend:** Render → [https://tasknet-gwcg.onrender.com](https://tasknet-gwcg.onrender.com)
* **Frontend:** Vercel → [https://task-net-five.vercel.app](https://task-net-five.vercel.app)
* **Database:** MongoDB Atlas

---

## ✨ Giao diện

Ứng dụng gọn gàng, responsive, dễ sử dụng, phù hợp làm bài tập lớn môn học.

```
