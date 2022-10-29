import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";

interface BannerSliderProps {}

const BannerSlider: FC<BannerSliderProps> = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default BannerSlider;
