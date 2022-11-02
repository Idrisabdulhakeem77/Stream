import { FC } from "react";
import { Items } from "../../shared/types";
import { BsThreeDots } from "react-icons/bs";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "../../shared/utils";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface RightbarFilmsProps {
  films: Items[] | undefined;
  isLoading: boolean;
  name: string;
  limitNumber: number;
  className?: string;
}

const RightbarFilms: FC<RightbarFilmsProps> = ({
  films,
  isLoading,
  limitNumber,
  name,
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <p className="capitalize font-bold  flex justify-between items-center">
        <span> {name} </span>
        <BsThreeDots size={20} />
      </p>

      <ul className="flex flex-col gap-4">
        {isLoading
          ? new Array(limitNumber).fill("").map((_, index) => (
              <li key={index} className="flex gap-5 items-center h-[156px]">
                <Skeleton className="shrink-0 max-w-[100px] w-full h-full rounded-md" />
                <Skeleton className="flex-grow h-[85%] rounded-md" />
              </li>
            ))
          : (films as Items[]).slice(0, limitNumber).map((film, index) => (
              <li key={film.id} className="mb-2">
                <Link to="" className="flex gap-5 items-center">
                  <div className="shrink-0 max-w-[100px] w-full">
                    <LazyLoadImage
                      src={resizeImage(film.backdrop_path, "w154")}
                      effect="blur"
                      alt="Poster image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className=" mb-2 text-lg">{film.title || film.name}</p>
                    <p className="mb-4 text-sm">
                      {film.release_date || film.first_air_date}
                    </p>
                    <div className="inline-flex gap-2 items-center px-3 py-[2px] rounded-full text-primary border border-black text-sm">
                      <span>{film.vote_average.toFixed(1)}</span>
                      <AiFillStar size={15} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
      </ul>
      <button onClick={() => navigate("/explore")}>See More</button>
    </div>
  );
};

export default RightbarFilms;
