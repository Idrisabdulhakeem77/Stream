import { FC } from "react";
import { Items } from "../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import FilmItem from "../Common/FilmItem";
import Skeleton from '../Common/Skeleton'

interface SectionSliderProps {
  films: Items[] | undefined;
}

const SectionSlider: FC<SectionSliderProps> = ({ films }) => {
  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView="auto"
          slidesPerGroupAuto
          loop
          spaceBetween={30}
          className="md:!w-[calc(100vw_-_260px_-_310px_-_2px_-_4vw_-_10px)] !w-[calc(100vw-8vw-2px)] tw-section-slider !py-1"
        >
          {films?.map((film) => (
            <SwiperSlide key={film.id} className="!w-[175px]">
              <FilmItem item={film} />
            </SwiperSlide>
          )) || (
            <>
              {new Array(Math.ceil(window.innerWidth / 200))
                .fill("")
                .map((_, index) => (
                  <SwiperSlide key={index} className="!w-[175px]">
                    <Skeleton className="!w-[175px] !h-[280px] shadow-sm" />
                  </SwiperSlide>
                ))}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default SectionSlider;
