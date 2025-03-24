export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    released: string;
    rating: number;
    genres: {
      name: string;
    }[];
    platforms: {
      platform: {
        name: string;
      };
    }[];
    // ... añade más según lo que necesites mostrar
  }

  