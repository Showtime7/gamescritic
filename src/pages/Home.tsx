import { GameCard } from "../components/GameCard";
import { useFetchGames } from "../customHooks/useFetchGames";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";
import { Filter } from "../components/Filter";
import "../index.css"

export const Home = () => {
  const [filters, setFilters] = useState({
    platform: 'all',
    genre: 'all',
    year: 'all'
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Usamos el hook con los filtros
  const { games, loading, error } = useFetchGames(filters);

  // Filtrado local para la búsqueda
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers para los filtros
  const handlePlatformChange = (platform: string) => {
    setFilters(prev => ({ ...prev, platform }));
  };

  const handleGenreChange = (genre: string) => {
    setFilters(prev => ({ ...prev, genre }));
  };

  const handleYearChange = (year: string) => {
    setFilters(prev => ({ ...prev, year }));
  };

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-left mb-2 tracking-tight"> 
          Juegos Top
        </h1>
      </div>
      
      <div className="mb-10">
        <SearchBar 
          value={searchTerm}
          onChange={(value) => setSearchTerm(value)}
        />
      </div>

      <div className="mb-10">
        <Filter
          onPlatformChange={handlePlatformChange}
          onGenreChange={handleGenreChange}
          onYearChange={handleYearChange}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};