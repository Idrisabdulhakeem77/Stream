import {FC} from 'react'
import {Items} from '../../shared/types'



interface RightbarFilmsProps {
    films : Items[] | undefined ;
    isLoading : boolean ;
    name : string ;
    limitNumber : number ;
    className?: string
}


const RightbarFilms : FC<RightbarFilmsProps> = (  { films , isLoading , limitNumber } ) => {
        return (
             <div>
                RightbarFilms
             </div>
        )
}


export default RightbarFilms

