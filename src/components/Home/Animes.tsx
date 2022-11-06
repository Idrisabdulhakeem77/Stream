import { FC} from 'react'
import { Animes } from '../../shared/types'


interface AnimeProps {
     data : Animes[] | undefined 
}


const Anime : FC<AnimeProps> = ( { data}) => {
     return (
         <div>
             Anime
         </div>
     )
     
}


export default Anime