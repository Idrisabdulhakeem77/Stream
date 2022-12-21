import { AiFillStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getRecommendedAnimeType, Animes } from "../../shared/types";

import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

interface AnimeRightBarProps {
  limit?: number;
  isLoading: boolean;
  animes: getRecommendedAnimeType[];
  className: string;
  name: string;
}

const AnimeRightBarFilms = ({
  name,
  className,
  limit,
  isLoading,
  animes,
}: AnimeRightBarProps) => {
  //  console.log(animes?.map((anime) =>  console.log(anime?.entry?.images?.jpg.) ))

  return (
    <div className={className}>
      <p className="mb-6 text-xl font-medium flex justify-between items-center">
        <span>{name}</span>
        <BsThreeDotsVertical size={20} />
      </p>

      <ul className="flex flex-col gap-5">
        {isLoading
          ? new Array(limit).fill("").map((_, index) => (
              <li key={index} className="flex gap-3 items-center h-[156px]">
                <Skeleton className="shrink-0 max-w-[100px] w-full h-full rounded-md" />
                <Skeleton className="flex-grow h-[85%] rounded-md" />
              </li>
            ))
          : (animes as getRecommendedAnimeType[])
              .slice(0, limit)
              .map((anime) => (
                <li key={anime.entry.mal_id}>
                  <Link
                    to={`/anime/${anime.entry.mal_id}`}
                    className="hover:brightness-75 transiton duration-300 flex gap-5 items-center"
                  >
                    <div className="shrink-0 max-w-[100px] w-full">
                      <LazyLoadImage
                        src={anime.entry.images.jpg.image_url}
                        className="w-full h-full object-cover rounded-md"
                        effect="blur"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className=" mb-3 text-lg"> </p>
                      <p className="mb-8"> {anime.entry?.title}</p>
                      {/* <div className="inline-flex gap-2 items-center px-3 py-[2px] rounded-full text-primary border border-primary text-sm">
                        <span> </span>
                        <AiFillStar size={15} />
                      </div> */}
                    </div>
                  </Link>
                </li>
              ))}
      </ul>
    </div>
  );
};

export default AnimeRightBarFilms;
