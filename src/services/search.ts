import { getRecommendedGenreType } from "../shared/types"
import axios from '../shared/axios'

export const getRecommendedGenre = async() : Promise<getRecommendedGenreType> => {
    const movieGenres =  (await axios.get('/genre/movie/list')).data.genres ;
    const tvGenres =  ( await axios.get('/genre/tv/list')).data.genres ;

    return {
         movieGenres , tvGenres
    }    
} 