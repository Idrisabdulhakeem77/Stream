import {FC} from "react"
import {Items} from "../../shared/types"
import { Swiper , SwiperSlide} from 'swiper/react'
import { Navigation} from "swiper"
import FilmItem from "../Common/FilmItem"


interface SectionSliderProps { 
     films: Items[] | undefined 
}

const SectionSlider : FC<SectionSliderProps> = ( { films }) => {
     return(
        <>
           <div>
              Sldier Componet 
           </div>
         </>
     )

}



export default SectionSlider