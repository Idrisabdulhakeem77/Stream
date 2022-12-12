import { useState } from "react";
import { Cast, DetailMovie, DetailTV, Reviews } from "../../shared/types";
import {LazyLoadImage} from "react-lazy-load-image-component"
import Skeleton from "../Common/Skeleton";
import ReadMore from "../Common/ReadMore";
import {resizeImage} from "../../shared/utils"
import ReviewTab from "../Common/ReviewTab";

interface FilmTabInfoProps {
  detail?: DetailMovie | DetailTV | undefined;
  credits?: Cast[] | undefined;
  reviews ?: Reviews[] | undefined
}

const FilmTabInfo = ({ detail , credits , reviews }: FilmTabInfoProps) => {
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
            {detail && (
              <ReadMore limitTextNumber={250}>{detail.overview}</ReadMore>
            )}
            {!detail && (
              <>
                <Skeleton className="h-20" />
              </>
            )}

            <p className="text-white font-medium mt-8 mb-3">DETAILS</p>
            {!detail && (
              <>
                <Skeleton className="h-16 w-[40%]" />
              </>
            )}

            {detail && (
              <>
                <p>Status: {detail.status}</p>
                {detail.media_type === "movie" && (
                  <p>Release date: {(detail as DetailMovie).release_date}</p>
                )}
                {detail.media_type === "tv" && (
                  <p>Last air date: {(detail as DetailTV).last_air_date}</p>
                )}
                <p>
                  Spoken language:
                  {detail.spoken_languages.map(
                    (language, index) =>
                      `${index ? ", " : ""} ${language.english_name}`
                  )}
                </p>{" "}
              </>
            )}
          </>
        )}


         { currentTab === "cast" && (
             <ul className="grid grid-cols-2 gap-x-20 gap-y-8">
             {credits &&
               credits.map((cast) => (
                 <li key={cast.id} className="flex gap-3 items-center">
                   <div className="shrink-0 max-w-[65px] w-full h-[65px]">
                     <LazyLoadImage
                       src={resizeImage(cast.profile_path, "w185")}
                       alt=""
                       effect="opacity"
                       className="object-cover rounded-full h-[65px] w-[65px]"
                     />
                   </div>
                   <div className="flex-grow">
                     <p className="text-primary text-lg font-medium">
                       {cast.name}
                     </p>
                     <p className="text-white text-base">
                       <span className="italic">as</span> {cast.character}
                     </p>
                   </div>
                 </li>
               ))}
           </ul>
         )}
         
         { currentTab === "reviews" &&  reviews && <ReviewTab reviews={reviews}/>}
      </div>
    </>
  );
};

export default FilmTabInfo;
