import { FC } from "react";
import { HomeFilms } from "../../shared/types";
import BannerSlider from "../../components/Slider/BannerSlider";

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
      <BannerSlider
        films={data?.Trending}
        isBannerLoading={isBannerLoading}
        dataDetails={dataDetails}
      />
    </>
  );
};

export default MainHomeFilms;
