import { useState } from "react";
import { Cast, DetailMovie, DetailTV, Reviews } from "../../shared/types";
import Skeleton from '../../components/Common/Skeleton'

interface FilmTabInfoProps {
  detail?: DetailMovie | DetailTV | undefined;
  credits?: Cast[] | undefined;
  reviews?: Reviews[] | undefined;
}

const FilmTabInfo = ({ detail }: FilmTabInfoProps) => {
  const [currentTab, setCurrentTab] = useState("overall");
  return (
    <>
      <div className="flex gap-8  text-gray-400 text-lg ">
        <button
          className={`hover:text-white transition duration-300 pb-1  ${
            currentTab === "overall" &&
            "font-medium -translate-y-2 border-b-2 border-primary text-white"
          }`}
          onClick={() => setCurrentTab("overall")}
        >
          Overall
        </button>
        <button
          className={`hover:text-white transition duration-300 pb-1 ${
            currentTab === "cast" &&
            "font-medium -translate-y-2 border-b-2 border-primary text-white"
          }`}
          onClick={() => setCurrentTab("cast")}
        >
          Cast
        </button>
        <button
          className={`hover:text-white transition duration-300 pb-1 ${
            currentTab === "reviews" &&
            "font-medium -translate-y-2 border-b-2 border-primary text-white"
          }`}
          onClick={() => setCurrentTab("reviews")}
        >
          Reviews
        </button>
        {detail && detail.media_type === "tv" && (
          <button
            className={`hover:text-white transition duration-300 pb-1 ${
              currentTab === "seasons" &&
              "font-medium -translate-y-2 border-b-2 border-primary text-white"
            }`}
            onClick={() => setCurrentTab("seasons")}
          >
            Seasons
          </button>
        )}
      </div>

      <div className="mt-10 text-lg">
        {currentTab === "overall" && (
          <>
            {detail && (
              <p className="text-xl italic mb-8 text-white text-center">
                {detail.tagline}
              </p>
              
            )}
            {!detail && <Skeleton className="h-6 w-[350px] mx-auto mb-8" />}
            <p className="text-white mb-3 font-medium"> STORY </p>
          </>
        )}
      </div>
    </>
  );
};

export default FilmTabInfo;
