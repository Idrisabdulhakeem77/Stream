import { FC} from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {getFullMovieDetails} from '../../services/movie'
import { FilmInfo} from "../../shared/types"
import FilmDetail from '../../components/FilmDetail/FilmDetail'


interface MovieDetailProps {}



const MovieDetail : FC<MovieDetailProps> = () => {
    const { id } = useParams()
    
    const {data  , isError} = useQuery<FilmInfo | undefined>( ['movie-info' , id] ,  () => getFullMovieDetails(Number(id as string)))  

    if(isError) return <div> Error </div>
     

   return (
      <FilmDetail {...data }/>
   )
}


export default MovieDetail