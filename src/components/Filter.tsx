
import { useFiltersData } from '../customHooks/useFilterData';

interface FilterProps {
  onPlatformChange: (platform: string) => void;
  onGenreChange: (genre: string) => void;
  onYearChange: (year: string) => void;
}

export const Filter = ({ onPlatformChange, onGenreChange, onYearChange }: FilterProps) => {
  const { filterData, loading, error } = useFiltersData();

  // Generar años desde el actual hasta 2000
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1999 }, (_, i) => currentYear - i);

  if (loading) return <div className="p-4 text-gray-500">Cargando filtros...</div>;
  if (error) return <div className="p-4 text-red-500">Error cargando filtros</div>;

  return (
    <div className="space-y-6 mb-10">
      <h3 className="text-xl font-bold text-gray-800">Filtrar por:</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Filtro Plataforma */}
        <div className="flex flex-col">
          <label htmlFor="platform" className="mb-2 text-sm font-medium text-gray-700">
            Plataforma
          </label>
          <select
            id="platform"
            onChange={(e) => onPlatformChange(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="all"
          >
            <option value="all">Todas las plataformas</option>
            {filterData.platforms.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro Género */}
        <div className="flex flex-col">
          <label htmlFor="genre" className="mb-2 text-sm font-medium text-gray-700">
            Género
          </label>
          <select
            id="genre"
            onChange={(e) => onGenreChange(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="all"
          >
            <option value="all">Todos los géneros</option>
            {filterData.genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro Año */}
        <div className="flex flex-col">
          <label htmlFor="year" className="mb-2 text-sm font-medium text-gray-700">
            Año de lanzamiento
          </label>
          <select
            id="year"
            onChange={(e) => onYearChange(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="all"
          >
            <option value="all">Todos los años</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};