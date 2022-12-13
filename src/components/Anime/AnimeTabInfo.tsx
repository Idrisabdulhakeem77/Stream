import { Animes } from "../../shared/types";
import { useState } from "react";
import Skeleton from "../Common/Skeleton";

interface AnimeTabInfoProps {
  detail: Animes;
}

const AnimeTabInfo = ({ detail }: AnimeTabInfoProps) => {
  const [currentTab, setCurrentTab] = useState("overall");

  console.log(detail?.synopsis);

  return (
    <>
      <div className="mt-4">
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



        { currentTab === "overall" && (
           <>
            { detail && (
                <p className="text-white"> { detail?.syniosis} </p>
            )}

            {!detail && <Skeleton className="h-6 w-[350px] mx-auto mb-8"/> }
           </>
        ) }
      </div>
    </>
  );
};

export default AnimeTabInfo;
