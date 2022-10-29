import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

interface BannerSliderProps {
  films: Items[] | undefined;
  isBannerLoading: boolean;
  dataDetails: any;
}

const BannerSlider: FC<BannerSliderProps> = ({
  films,
  isBannerLoading,
  dataDetails,
}) => {
  return (
    <>
      {isBannerLoading ? (
        <h2> Loading ohhh</h2>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          
          slidesPerView={1}
         
        >
          {(films as Items[]).map((film, index) => (
            <SwiperSlide key={film.id}>
                 <div className="border-black">
                    <h2> { film.name }</h2>
                 </div>
            </SwiperSlide>
          ))}

           {/* <SwiperSlide>Slide 1</SwiperSlide>
           <SwiperSlide>Slide 2</SwiperSlide>
           <SwiperSlide>Slide 3</SwiperSlide>
           <SwiperSlide>Slide 4</SwiperSlide>
           <SwiperSlide>Slide 5</SwiperSlide> */}
        </Swiper>
      )}
    </>
  );
};

export default BannerSlider;
