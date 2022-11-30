import axios from "axios";
import {    AnimeItempage} from "../shared/types";


export const getAnime = async ( page : number ): Promise< AnimeItempage> => {
  const response = (await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)).data;
    
   return {
        ...response ,
   }
};
