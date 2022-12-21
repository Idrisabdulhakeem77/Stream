import { FC } from "react";
import { HomeFilms } from "../../shared/types";
import BannerSlider from "../../components/Slider/BannerSlider";
import SectionSlider from "../Slider/SectionSlider";
import Skeleton from "../../components/Common/Skeleton";

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

      <ul className="flex flex-col mt-12">
        {isSectionLoading ? (
          <>
            {new Array(2).fill("").map((_, index) => (
              <li key={index}>
                <Skeleton className="mb-3 max-w-[10%] h-8 rounded-md" />
                <SectionSlider films={undefined} />
              </li>
            ))}
          </>
        ) : (
          Object.entries(data as  HomeFilms)
            .filter((section) => section[0] !== "Trending")
            .map((section, index) => (
              <li key={index}>
                <h2 className="text-xl text-white font-medium tracking-wider mb-2 md:mt-12 mt-24">
                  {section[0]}
                </h2>

                <SectionSlider films={section[1]} />
              </li>
            ))
        )}
      </ul>

      
    </>
  );
};

export default MainHomeFilms;
