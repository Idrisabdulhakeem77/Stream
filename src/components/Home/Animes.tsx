import { FC} from 'react'
import { Animes } from '../../shared/types'
import AnimeBannerSlider from '../Slider/AnimeBannerSlider'


interface AnimeProps {
     data : Animes[] | undefined 
}


const Anime : FC<AnimeProps> = ( { data }) => {

     return (
        <>
         
          <AnimeBannerSlider animes={data}/>
         </>
     )
     
}


export default Anime