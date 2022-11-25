import { FC } from "react";
import { Animes } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFlip } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import { Link } from "react-router-dom";


interface AnimeBannerSliderProps {
  animes: Animes[] | undefined;
}

const AnimeBannerSlider: FC<AnimeBannerSliderProps> = ({ animes }) => {
  const { isMobile } = useCurrentViewPort();
  return (
    <>
      <div className="mt-4 relative h-4 md:pb-[45%] pb-[35%]  tw-banner-slider mb-4  ">
        <Swiper
          navigation={true}
          effect={"flip"}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          grabCursor={true}
          modules={[Navigation, Autoplay, EffectFlip]}
          slidesPerView={1}
          className="!absolute !top-0 !left-0 w-[450px] h-[400px] !rounded-lg "
        >
          {(animes as Animes[]).map((anime, index) => {
            const image = anime.images.jpg.large_image_url;
            return (
              <SwiperSlide>
                <Link to="/">
                  <LazyLoadImage src={`${image}`} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default AnimeBannerSlider;
