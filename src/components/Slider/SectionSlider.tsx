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
           <div className="relative">
                <Swiper modules={[Navigation]} navigation={true} slidesPerView="auto" slidesPerGroupAuto loop spaceBetween={30}>
                  
               </Swiper>
           </div>
         </>
     )

}



export default SectionSlider