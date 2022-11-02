import {FC} from 'react'
import {Items} from '../../shared/types'
import {BsThreeDots} from 'react-icons/bs'



interface RightbarFilmsProps {
    films : Items[] | undefined ;
    isLoading : boolean ;
    name : string ;
    limitNumber : number ;
    className?: string
}


const RightbarFilms : FC<RightbarFilmsProps> = (  { films , isLoading , limitNumber , name , className = "" } ) => {
        return (
             <div className={className}> 
                <p className='capitalize font-bold  justify-between items-center'>{name}</p>
                <span> <BsThreeDots size={20}/> </span> 
             </div>
        )
}


export default RightbarFilms

