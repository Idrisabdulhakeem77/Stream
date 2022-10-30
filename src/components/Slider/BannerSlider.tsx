import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "../../shared/utils";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

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
      <div>Slider Component</div>

      {isBannerLoading ? (
        " loading"
      ) : (
        <Swiper
          navigation
          modules={[Navigation, Autoplay]}
          className="!absolute !top-0 !left-0 !w-full !h-full  !rounded-lg"
        >
          {(films as Items[]).map((film, index) => (
            <SwiperSlide key={film.id}>
              <Link
                to={`${
                  film.media_type === "movie"
                    ? `/movie/${film.id}`
                    : `/movie/${film.id}`
                }`}
                className="group"
              >
                <LazyLoadImage
                  src={resizeImage(film.backdrop_path, "w1280")}
                  alt="Backdrop image"
                  effect="blur"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default BannerSlider;
