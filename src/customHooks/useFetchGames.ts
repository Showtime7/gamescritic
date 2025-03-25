import { useEffect, useState } from 'react';
import api from '../services/api';
import { Game } from '../types/Game';

export const useFetchGames = (filters: {
  platform: string;
  genre: string;
  year: string;
}) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const baseParams = {
          ordering: '-metacritic',
          page_size: 30,
          platforms: filters.platform === 'all' ? undefined : filters.platform,
          genres: filters.genre === 'all' ? undefined : filters.genre,
        };

        // 2. Creamos un objeto para parámetros adicionales
        const additionalParams: Record<string, string> = {};
        // Solo añade el filtro de año si no es "all"
        if (filters.year !== 'all') {
            additionalParams.dates = `${filters.year}-01-01,${filters.year}-12-31`;
        }
        // 4. Combinamos ambos objetos de parámetros
        const params = { ...baseParams, ...additionalParams };

        const response = await api.get('/games', { params });
        setGames(response.data.results);
      } catch (error) {
        setError('No se cargaron los juegos');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [filters.platform, filters.genre, filters.year]);

  return { games, loading, error };
};