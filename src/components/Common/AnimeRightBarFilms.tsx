import { AiFillStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { Animes } from "../../shared/types";
import { resizeImage } from "../../shared/utils";
import Skeleton from "./Skeleton";
import {Link} from "react-router-dom"

interface AnimeRightBarProps {
  limit?: number;
  isLoading: boolean;
  films: Animes[];
  className: string;
  name: string;
}

const AnimeRightBarFilms = ({
  name,
  className,
  limit,
  isLoading,
  films,
}: AnimeRightBarProps) => {
   console.log(isLoading)
  return (
    <div className={className}>
      <p className="mb-6 text-xl font-medium flex justify-between items-center">
        <span>{name}</span>
        <BsThreeDotsVertical size={20} />
      </p>

      <ul>
         { isLoading ? (
            new Array(limit).fill("").map((_ , index) => (
               <li key={index} className="flex gap-3 items-center h-[156px]">
                   <Skeleton className="shrink-0 max-w-[100px] w-full h-full rounded-md" />
                   <Skeleton className="flex-grow h-[85%] rounded-md" />
               </li>
            ))
         )  : (
            (films as Animes[]).slice(0 , limit).map((film ) => (
               <Link to={`/anime/${film.mal_id}`}>
                  <div >
                     <LazyLoadImage
                       src={film.images?.jpg?.image_url}
                       className="w-full h-full object-cover rounded-md"
                       effect="blur"
                      />
                  </div>
               </Link>  
              ))  
         )}

      </ul>
    </div>
  );
};

// (`${ANIME_API_URL}/anime/${id}`) 

export default AnimeRightBarFilms;
