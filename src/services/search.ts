import { getRecommendedGenreType } from "../shared/types"
import axios from '../shared/axios'

export const getRecommendedGenre = async() : Promise<getRecommendedGenreType> => {
    const movieGenres =  (await axios.get('/genre/movie/list')).data.genre ;
    const tvGenres =  ( await axios.get('/genre/tv/list')).data.genre ;
   
     console.log(movieGenres , tvGenres )

    return {
         movieGenres , tvGenres
    }    
} 