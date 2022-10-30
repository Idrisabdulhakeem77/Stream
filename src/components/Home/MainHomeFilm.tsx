import { FC } from "react";
import { HomeFilms } from "../../shared/types";
import BannerSlider from "../../components/Slider/BannerSlider";
import SectionSlider from "../Slider/SectionSlider";

interface MainHomeFilmProps {
  data: HomeFilms | undefined;
  isBannerLoading: boolean;
  isSectionLoading: boolean;
  dataDetails: any;
}

const MainHomeFilms: FC<MainHomeFilmProps> = ({
  isBannerLoading,
  data,
  dataDetails,
  isSectionLoading,
}) => {
  return (
    <>
      {/* <BannerSlider
        films={data?.Trending}
        isBannerLoading={isBannerLoading}
        dataDetails={dataDetails}
      /> */}
   

      <SectionSlider/>
    </>
  );
};

export default MainHomeFilms;
