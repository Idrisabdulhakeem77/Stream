import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";

interface BannerSliderProps {
  films: Items[] | undefined;
  isBannerLoading: boolean;
  dataDetails: any;
}

const elements = ["1", "2", "3"];

const BannerSlider: FC<BannerSliderProps> = ({
  films,
  isBannerLoading,
  dataDetails,
}) => {
  return (
    <>
      {/* {isBannerLoading ? (
        <h2> Loading ohhh</h2>
      ) : (
          <div>
             This is the slider component
          </div>
      )} */}

      <div>Slider Component</div>

      {isBannerLoading ? (
        " loading"
      ) : (
        <Swiper slidesPerView={1} modules={[Navigation, Autoplay]} navigation>
          {elements.map((el, i) => {
            return <SwiperSlide key={i}> Slider {el}</SwiperSlide>;
          })}
        </Swiper>
      )}
    </>
  );
};

export default BannerSlider;
