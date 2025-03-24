import { useEffect, useState } from 'react'
import api from '../services/api'
import {Game} from "../types/Game"

//Se define el juego.



export const useFetchGames=()=>{
    //Manejo de estado, carga y errores
    const [games, setGames]=useState<Game[]>([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState<string | null>(null);

    useEffect(()=>{
        const fetchGames= async ()=>{

            try {

                const response= await api.get("/games",{
                    params: {
                        ordering: "-metacritic", // Ordena de mayor a menor puntuación
                        page_size: 30, // Limita resultados para la prueba
                      },
                });

                setGames(response.data.results)
                
            } catch (error) {
                setError("No se cargaron los juegos")
                
            }finally{
                setLoading(false)
            }


        }
       fetchGames();
    }, [])

    return { games, loading, error };
}


