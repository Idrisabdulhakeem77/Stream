import {FC} from 'react'
import { useQuery } from '@tanstack/react-query'
import {getTrendingNow} from  '../../services/home'
import {  Items } from '../../shared/types'
import RightbarFilms from '../../components/Common/RightbarFilms'



const PopularThisWeek : FC = ( ) => {
    const { data , isLoading , isError , error} = useQuery<Items[] , Error>(["trending"] , getTrendingNow)

    
    return (
         <RightbarFilms
          className="mt-4"
            films={data}
            limitNumber={2}
            isLoading= {isLoading}
          />
    )
} 

export default PopularThisWeek