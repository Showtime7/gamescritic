// src/pages/GameDetail.tsx
import { useParams } from "react-router-dom";

export const GameDetail = () => {
  const { id } = useParams(); // Extrae el ID de la URL

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Detalle del Juego ID: {id}</h1>
      {/* Aquí luego cargarás los datos de la API */}
    </div>
  );
};