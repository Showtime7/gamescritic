// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {GameDetail} from "./pages/GameDetail";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar opcional (ejemplo básico) */}
      <nav className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-bold">GamesCritic</h1>
      </nav>

      {/* Configuración de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </div>
  );
}

export default App;