import {FC} from 'react'
import  {HomeFilms} from '../../shared/types'


interface MainHomeFilmProps {
    dataMovie : HomeFilms | undefined ,
    dataMovieDetails : any ,
    isLoadingMovieDetail : boolean ,
    isLoadingMovie : boolean

}


const MainHomeFilms : FC<MainHomeFilmProps> = ( { dataMovieDetails , dataMovie , isLoadingMovie , isLoadingMovieDetail}) => {
       


    return (
        <>
         {console.log( "Visited")}
         </>
    )
}


export default MainHomeFilms