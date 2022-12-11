import { AiFillStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import { Animes } from "../../shared/types";
import { resizeImage } from "../../shared/utils";
import Skeleton from "./Skeleton";

interface AnimeRightBarProps {
  limit?: number;
  isLoading: boolean;
  films: Animes[];
  className : string
  name : string
}


const AnimeRightBarFilms = ( {name} : AnimeRightBarProps) => {
      return (
         <div>
             Anime Right bar
         </div>
      )
}

export default AnimeRightBarFilms
