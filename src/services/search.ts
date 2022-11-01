import { getRecommendedGenreType } from "../shared/types"
import axios from '../shared/axios'

export const getRecommendedGenre = async() : Promise<getRecommendedGenreType> => {
    const movieGenres = await (await axios.get('/genre/movie/list')).data.genre
    const tvGenres = await axios.get('/genre/tv/list').data.genre


    return {
         movieGenres , tvGenres
    }
     
} 