import { Game } from "../types/Game";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={game.background_image} 
        alt={game.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{game.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">
            {game.released?.split("-")[0]}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
            game.metacritic > 75 ? "bg-green-100 text-green-800" :
            game.metacritic > 50 ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          }`}>
            {game.metacritic}
          </span>
        </div>
      </div>
    </div>
  );
};