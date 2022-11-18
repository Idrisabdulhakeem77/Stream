import { FC} from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {getFullMovieDetails} from '../../services/movie'
import { FilmInfo} from "../../shared/types"

interface MovieDetailProps {}



const MovieDetail : FC<MovieDetailProps> = () => {
    const { id } = useParams()
    
    const {data : MovieInfoData , error , isError} = useQuery<FilmInfo | undefined>( ['movie-info'] ,  () => getFullMovieDetails(Number(id as string)))  


    if(isError) retur
     

   return (
      <div>
          Movie Detail
      </div>
   )
}


export default MovieDetail