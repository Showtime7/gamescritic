import { GameCard } from "../components/GameCard";
import { useFetchGames } from "../customHooks/useFetchGames";
import { SearchBar } from "../components/SearchBar";
import "../index.css"
import { useState } from "react";

export const Home = () => {
  const { games, loading, error } = useFetchGames();
  const [searchTerm, setSearchTerm]=useState("")

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-lg">Cargando juegos...</p>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {error}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-5">
    {/* Contenedor separado para el título */}
    <div className="mb-8"> {/* Aumenté este margen inferior */}
    <h1 className="text-3xl font-bold text-left mb-2 tracking-tight"> 
  Juegos Top
</h1>
    </div>
    
    {/* SearchBar con su propio espacio */}
    <div className="mb-10"> {/* Margen inferior generoso */}
      <SearchBar 
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
      />
    </div>

    {/* Grid de juegos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  </div>
  );
};