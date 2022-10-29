import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";

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
        <Swiper autoplay={{ delay: 5000, disableOnInteraction: false }}>
          {(films as Items[]).map((film, index) => (
            <SwiperSlide key={index}>
               
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default BannerSlider;
