import axios from "axios";
import {    AnimeItempage , Animes , getRecommendedAnimeGenreType , HomeAnimes}  from "../shared/types";
import { ANIME_API_URL } from "../shared/constants";


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


export const getAnimeFullDetails  =  async(id : number) : Promise<any> =>  {
   const response = await Promise.all([
        axios.get(`${ANIME_API_URL}/anime/${id}`) ,
        axios.get(`${ANIME_API_URL}/anime/${id}/characters `),
        axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`),
        axios.get(`https://api.jikan.moe/v4/anime/${id}/reviews`)
   ]) 
   

   const animeInfo = response.reduce((final , current , index) => {
      // console.log(current.data)
      switch(index) {
          case 0 : 
             final.detail  = {...current.data?.data}
            break
          case 1 : 
             final.characters = current.data.data.splice( 0 , 8)
             break
         case 2 :
             final.recommendations = current.data.data.slice( 0, 5)
              break

         case 3 :
             final.reviews = current.data.data.slice(0 ,5 )
             break
            
      }

      return final
   } , {}  as HomeAnimes )
 
   
    
   return animeInfo
}


export const getRecentAnime = async() => {
  const data = await (await (axios.get("https://api.jikan.moe/v4/recommendations/anime"))).data 


  return data
}