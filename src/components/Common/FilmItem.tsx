import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { resizeImage } from "../../shared/utils";
import { AiFillStar } from "react-icons/ai";
import { Items } from "../../shared/types";

interface FilmItemProps {
  item: Items;
}

const FilmItem: FC<FilmItemProps> = ({ item }) => {
  return (
    <Link
      to={
        item.media_type === "movie"
          ? `/movie/${item.id}`
          : item.media_type === "tv"
          ? `/tv/${item.id}`
          : `/`
      }
    >
      <div className="shadow-sm bg-dark-darken pb-2 rounded-md overflow-hidden hover:scale-105 transition duration-300 relative group ">
        <LazyLoadImage
          alt="Poster film"
          src={
            item.media_type === "person"
              ? resizeImage(item.profile_path || "", "w342")
              : resizeImage(item.poster_path, "w342")
          }
          className="object-cover"
          effect="blur"
        />
        <p className="whitespace-nowrap overflow-hidden text-ellipsis text-base text-white mt-1 text-center px-2 group-hover:text-white transition duration-300">
          {item.title || item.name}
        </p>
        <div className="px-2 py-1 rounded-full absolute top-[5%] left-[8%] z-20 flex items-center gap-1 text-white text-xs">
          {item.vote_average?.toFixed(1)}
          <AiFillStar size={15} />
        </div>
      </div>
    </Link>
  );
};

export default FilmItem;
