import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";

interface BannerSliderProps {
   films : any,
   isBannerLoading : boolean 
   dataDetails : any
}



const BannerSlider: FC<BannerSliderProps> = ( { films  , isBannerLoading ,  dataDetails }) => {
  return (
    <Swiper

      >
       
    </Swiper>
  );
};

export default BannerSlider;
