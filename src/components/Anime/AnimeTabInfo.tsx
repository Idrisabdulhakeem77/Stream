import { Animes, AnimeCast } from "../../shared/types";
import { useState } from "react";
import Skeleton from "../Common/Skeleton";
import ReadMore from "../Common/ReadMore";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface AnimeTabInfoProps {
  detail: Animes;
  characters: AnimeCast[];
}

const AnimeTabInfo = ({ detail, characters }: AnimeTabInfoProps) => {
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
            onClick={() => setCurrentTab("characters")}
          >
            Characters
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

            {detail && (
              <>
                <p>Status : {detail.status}</p>
                <p> Release Date : {detail.aired.string}</p>
              </>
            )}
          </>
        )}

        {currentTab === "characters" && (
          <ul className="grid grid-cols-2 gap-x-20 gap-y-8">
            {characters &&
              characters.map((c) => {
                const { character, role } = c;

                return (
                  <li key={character.mal_id}>
                    <div className="shrink-0 max-w-[65px] w-full h-[65px]">
                      <LazyLoadImage
                        src={character.images.jpg.image_url}
                        alt=""
                        effect="opacity"
                        className="object-cover rounded-full h-[65px] w-[65px]"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-primary text-lg font-medium"></p>
                      <p className="text-white text-base">
                        <span className="italic">as</span> {character.name}
                      </p>
                      <p text-white> {role} </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
};

export default AnimeTabInfo;
