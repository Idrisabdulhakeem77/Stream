import { useSearchParams } from "react-router-dom";
import { SUPPORTED_QUERY } from "../../shared/constants";


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