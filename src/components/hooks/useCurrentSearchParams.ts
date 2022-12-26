import { useSearchParams } from "react-router-dom";
import { SUPPORTED_QUERY , ANIME_SUPPORTED_QURIES } from "../../shared/constants";


export const useCurrentSeaarchParams = () => {
    const [searchParams ] = useSearchParams()

    const currentSearchParms =  JSON.parse(JSON.stringify(SUPPORTED_QUERY)) as {
         [key : string] : string[]
    } 
     
    searchParams.forEach((value , key) => {
        currentSearchParms[key].push(value)
    })
    

    return [currentSearchParms] as const 
}

export const useAnimeCurrentSeaarchParams = () => {
    const [searchParams ] = useSearchParams()

    const animeCurrentSearchParms =  JSON.parse(JSON.stringify(ANIME_SUPPORTED_QURIES)) as {
         [key : string] : string[]
    }

      
     searchParams.forEach(( value , index) => {
           animeCurrentSearchParms[index].push(value)
     })

    return [animeCurrentSearchParms] as const 
}