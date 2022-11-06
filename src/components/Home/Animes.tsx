import { FC} from 'react'


interface AnimeProps {
     data : string[] | undefined 
}


const Anime : FC<AnimeProps> = ( { data}) => {
     return (
         <div>
             Anime
         </div>
     )
     
}


export default Anime