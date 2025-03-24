
interface Props {
    value: string;       // Texto actual del input
    onChange: (value: string) => void;  // Función para actualizar
  }


export const SearchBar = ({value, onChange}: Props) => {

    
    return (
      <div className="relative w-full max-w-md">
        {/* Input con botón integrado */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar juegos..."
          className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-gray-300
                    focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent
                    hover:border-gray-400 transition-all duration-200 bg-white shadow-sm"
        />
        
        {/* Botón-lupa ABSOLUTO dentro del input */}
        <button 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400
                     hover:text-gray-600 focus:text-gray-600 transition-colors"
          aria-label="Buscar"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </button>
      </div>
    );
  };