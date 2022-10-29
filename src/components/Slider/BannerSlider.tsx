import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";

interface BannerSliderProps {}



const BannerSlider: FC<BannerSliderProps> = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      autoplay={ { delay : 5000 , disableOnInteraction : false} }
    >   
      </Swiper>
  );
};

export default BannerSlider;
