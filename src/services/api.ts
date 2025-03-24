import axios from "axios";

const API_KEY=import.meta.env.VITE_API_KEY
const api= axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: API_KEY
    }
})

export default api