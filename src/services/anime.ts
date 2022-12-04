import axios from "axios";
import {    AnimeItempage , Animes , getRecommendedAnimeGenreType} from "../shared/types";


export const getAnime = async ( page : number ): Promise< AnimeItempage> => {
  const response = (await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)).data;
    
   return {
        ...response ,
   }
};

 
 
// Home animes are the top animes from jikan api
export const getHomeAnimes = async()  :Promise<Animes> => {
   const response = (await axios.get("https://api.jikan.moe/v4/top/anime")).data
   
   const {data} = response
   

   return data
    
}



export const getAnimeRecommendedGenres = async () : Promise<getRecommendedAnimeGenreType> => {
    const response = (await axios.get("https://api.jikan.moe/v4/genres/anime")).data
    return response
}
