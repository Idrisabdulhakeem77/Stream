import { FC } from "react";
import { Animes } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFlip } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import {Link} from 'react-router-dom'
import { resizeImage } from "../../shared/utils";

interface AnimeBannerSliderProps {
  animes: Animes[] | undefined;
}

const AnimeBannerSlider: FC<AnimeBannerSliderProps> = ({ animes}) => {
  const { isMobile } = useCurrentViewPort();
  return (
    <>
      <div className="mt-4 relative h-0 md:pb-[45%]pb-[35%] tw-banner-slider mb-4"></div>
      <Swiper
        navigation={true}
        effect={"flip"}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        grabCursor={true}
        modules={[Navigation, Autoplay, EffectFlip]}
        slidesPerView={1}
        className="!absolute !top-0 !left-0 w-full h-[300px] !rounded-lg"
      >
          {  ( animes as Animes[]).map((anime , index) => (
             <SwiperSlide>
                 <Link to={`anime/${anime.mal_id}`}>
                     <LazyLoadImage src={"https://cdn.myanimelist.net/images/anime/1208/94745l.jpg"} alt="image" effect="blur"/>
                 </Link>
             </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default AnimeBannerSlider;
