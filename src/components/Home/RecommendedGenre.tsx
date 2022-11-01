import { useQuery } from '@tanstack/react-query'
import {FC} from 'react'
import {getRecommendedGenre} from '../../services/search'
import {  getRecommendedGenreType } from "../../shared/types"

interface RecommendedGenresProps {
     currentTab : string
}

const getRandomGenres = ( genres : { id : number , name : string}[] ) => {
   const  randomGenreIndex = [28 , 12 , 16 , 35 , 18 ,99 ,18]
   return randomGenreIndex.map((arrIndex) => genres[arrIndex])
}

const RecommendedGenres: FC<RecommendedGenresProps>  = ( { currentTab  }) => {
     const  { data , isError , isLoading , error }  = useQuery<getRecommendedGenreType | Error> (["genres"] , getRecommendedGenre) 

     console.log(data)

      if(isError) return <div> Error </div>    
      
    //   if(isLoading) return <div className="mt-36 mb-20 mx-auto h-10 w-10 rounded-full border-[5px] border-dark-lighten border-t-transparent animate-spin">  </div>

    if(isLoading) return <div>Loading</div>

     console.log(data)
      return (
         <div>
             Recommended Genre
         </div>
      )
} 


export default  RecommendedGenres 