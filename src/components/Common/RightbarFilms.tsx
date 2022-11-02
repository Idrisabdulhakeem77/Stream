import {FC} from 'react'
import {Items} from '../../shared/types'
import {BsThreeDots} from 'react-icons/bs'
import Skeleton from './Skeleton';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {resizeImage} from '../../shared/utils'



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
                <p className='capitalize font-bold  flex justify-between items-center'>
                     <span> {name} </span>
                     <BsThreeDots size={20}/>
                </p>

                <ul className='flex flex-col gap-4'>
                     { isLoading ? (
                        new Array(limitNumber).fill('').map( ( _ , index) => (
                             <li key={index}>
                                 <Skeleton/>
                                 </li>
                        ))
                     ) :  (
                         (films?.map((film , index) => (
                             <li key={film.id}>
                                 <Link to="">
                                     <div>
                                         <LazyLoadImage
                                             src={ resizeImage(film.backdrop_path , "w150")}
                                            effect='blur'
                                            alt='poster'
                                           />
                                     </div>
                                  </Link>
                             </li>
                         )))
                     ) }
                     
                </ul>
             </div>
        )
}


export default RightbarFilms

