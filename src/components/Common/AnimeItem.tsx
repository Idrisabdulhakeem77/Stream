import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Animes } from "../../shared/types";

interface AnimeItemProps {
  item: Animes;
}

const AnimeItem: FC<AnimeItemProps> = ({ item }) => {
  return (
    <Link to={`/anime/${item.mal_id}`}>
      <div className="shadow-sm bg-dark-darken pb-2 rounded-md overflow-hidden hover:scale-105 transition duration-300 relative group ">
        <LazyLoadImage
          alt="Poster film"
          src={item.images.jpg.image_url}
          className="object-cover"
          effect="blur"
        />
        <p className="whitespace-nowrap overflow-hidden text-ellipsis text-base text-white mt-1 text-center px-2 group-hover:text-white transition duration-300">
          {item.title}
        </p>
        <div className="px-2 py-1 rounded-full absolute top-[5%] left-[8%] z-20 flex items-center gap-1 text-white text-xs">
          {item.score?.toFixed(1)}
          <AiFillStar size={15} />
        </div>
      </div>
    </Link>
  );
};

export default AnimeItem;
