import {FC} from 'react'
import { Animes } from '../../shared/types'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Navigation , Autoplay , EffectFlip } from 'swiper'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useCurrentViewPort } from '../hooks/useCurrentViewPort'


interface AnimeBannerSliderProps {
     animes : Animes[] | undefined ;

}


const AnimeBannerSlider : FC<AnimeBannerSliderProps>  = () => {
     return (
         <div>
             Anime
         </div>
     )
}


export default AnimeBannerSlider