import {FC} from 'react'
import { useQuery } from '@tanstack/react-query'
import {getTrendingNow} from  '../../services/home'
import {  Items } from '../../shared/types'
import RightbarFilms from '../../components/Common/RightbarFilms'



const PopularThisWeek : FC = ( ) => {
    const { data , isLoading , isError , error} = useQuery<Items[] , Error>(["trending"] , getTrendingNow)

    if(isError) return <div> Error : { error.message} </div> 

    
    return (
         <RightbarFilms
          name='Popular this week'
          className="mt-4"
            films={data}
            limitNumber={2}
            isLoading= {isLoading}
          />
    )
} 

export default PopularThisWeek