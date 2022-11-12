import axios from "axios";
import { Animes } from "../shared/types";

export const getAnime = async ( page : number ): Promise<Animes[]> => {
  const { data } = (await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`));
   
   console.log(data)
   
  return data;
};
