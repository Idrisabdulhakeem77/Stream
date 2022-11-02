import {FC} from 'react'
import { useQuery } from '@tanstack/react-query'
import {getTrendingNow} from  '../../services/home'
import {  Items } from '../../shared/types'



const PopularThisWeek : FC = ( ) => {
    const { data , isLoading , isError , error} = useQuery<Items[] , Error>(["trending"] , getTrendingNow)

    
    return (
         <div>
             Popular
         </div>
    )
} 

export default PopularThisWeek