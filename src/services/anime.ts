import axios from "axios";
import {    AnimeItempage , Animes} from "../shared/types";


export const getAnime = async ( page : number ): Promise< AnimeItempage> => {
  const response = (await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)).data;
    
   return {
        ...response ,
   }
};

 
 
// Home animes are the top animes from jikan api
export const getHomeAnimes = async()  :Promise<Animes> => {
   const response = (await axios.get("https://api.jikan.moe/v4/top/anime")).data
   
   console.log(response)

    return {
       ...response
    }
}   
