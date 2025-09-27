import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
          {/* Navbar */}
          <nav className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-purple-600">📋 TaskNest</h1>
            <div className="flex gap-4">
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
              <Link to="/stats" className="text-blue-600 hover:underline">Stats</Link>
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
