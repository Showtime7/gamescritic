import { useEffect, useState } from "react"
import api from "../services/api";

// Tipos para los datos de filtro
interface FilterData {
    genres: Array<{ id: number; name: string }>;
    platforms: Array<{ id: number; name: string }>;
  }

export const useFiltersData=()=>{

    const [filterData, setFilterData]=useState<FilterData>({
        genres: [],
        platforms: [],
      });
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState<string | null>(null);
    useEffect(()=>{

        const fetchFilterData= async()=>{
            try {
               // Fetch en paralelo para mejor performance
                const [genresRes, platformsRes] = await Promise.all([
                    api.get("/genres"),
                    api.get("/platforms"),
                ]);
                setFilterData({
                    genres: genresRes.data.results,
                    platforms: platformsRes.data.results,
                })
                
            } catch (error) {

                setError("No se cargaron los generos")
                
            }finally{
                setLoading(false)
            }

        }
        fetchFilterData()


    },[])

    return {filterData, loading, error}
}