import { useQuery } from '@tanstack/react-query'
import {FC} from 'react'
import {getRecommendedGenre} from '../../services/search'
import {  getRecommendedGenreType } from "../../shared/types"

interface RecommendedGenresProps {
     currentTab : string
}

const RecommendedGenres: FC<RecommendedGenresProps>  = ( { currentTab  }) => {
     const  { data , isError , isLoading , error }  = useQuery<getRecommendedGenreType | Error> (["genres"] , getRecommendedGenre) 

     console.log(data)
      return (
         <div>
             Recommended Genre
         </div>
      )
} 


export default  RecommendedGenres 