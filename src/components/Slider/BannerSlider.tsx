import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay , EffectFade } from "swiper";

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
      {/* {isBannerLoading ? (
        <h2> Loading ohhh</h2>
      ) : (
          <div>
             This is the slider component
          </div>
      )} */}

       <div> 
           Slider Component
         </div>
    </>
  );
};

export default BannerSlider;
