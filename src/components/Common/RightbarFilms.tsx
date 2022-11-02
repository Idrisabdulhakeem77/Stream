import {FC} from 'react'
import {Items} from '../../shared/types'



interface RightbarFilmsProps {
    films : Items[] | undefined ;
    isLoading : boolean ;
    limitNumber : number ;
    className?: string
}


const RightbarFilms : FC<RightbarFilmsProps> = (  { films , isLoading} ) => {
        return (
             <div>
                RightbarFilms
             </div>
        )
}


export default RightbarFilms

