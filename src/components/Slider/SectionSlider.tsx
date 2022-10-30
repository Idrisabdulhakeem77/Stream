import {FC} from "react"
import {Items} from "../../shared/types"
import { Swiper , SwiperSlide} from 'swiper/react'
import { Navigation} from "swiper"


interface SectionSliderProps { 
     films: Items[] | undefined 
}

const SectionSlider : FC<SectionSliderProps> = ( { films }) => {
     return(
         <div className="relative"> 
            <Swiper modules={[Navigation] }>
                 <SwiperSlide></SwiperSlide>
            </Swiper>
         </div>
     )

}



export default SectionSlider