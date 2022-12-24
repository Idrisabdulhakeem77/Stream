import { Animes , AnimeCast } from "../../shared/types";
import { useState } from "react";
import Skeleton from "../Common/Skeleton";
import ReadMore from "../Common/ReadMore";


interface AnimeTabInfoProps {
  detail: Animes;
  characters : AnimeCast[]
}

const AnimeTabInfo = ({ detail , characters }: AnimeTabInfoProps) => {
  const [currentTab, setCurrentTab] = useState("overall");


  return (
    <>
      <div className="mt-4 w-[500px]">
        <div className="flex gap-8 text-gray-400 text-lg">
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
        </div>

        {currentTab === "overall" && (
          <>
            <p className="text-white mb-3 font-medium">STORY</p>
            {detail && (
              <ReadMore limitTextNumber={150}>{detail.synopsis}</ReadMore>
            )}

            {!detail && <Skeleton className="h-6 w-[350px] mx-auto mb-8" />}

            <p className="mt-8 text-white font-medium mb-3">DETAILS</p>
            {!detail && (
              <>
                <Skeleton className="h-16 w-[40%]" />
              </>
            )}

            { detail && (
                <>
                 <p>Status : {detail.status}</p>
                 <p> Release Date : {detail.aired.string}</p>
              </>
            )}
          </>
        )}

       {/* { currentTab === "cast" && (
          
       ) } */}

      </div>
    </>
  );
};

export default AnimeTabInfo;
