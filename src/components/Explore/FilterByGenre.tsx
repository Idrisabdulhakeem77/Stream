import { FunctionComponent } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "@tanstack/react-query";
import { getRecommendedGenreType } from "../../shared/types";
import { getRecommendedGenre } from "../../services/search";
import { useSearchParams } from "react-router-dom";
import { useCurrentSeaarchParams } from "../hooks/useCurrentSearchParams";
interface FilterByGenreProps {
  currentTab: string | null;
}

const FilterByGenre: FunctionComponent<FilterByGenreProps> = ({
  currentTab,
}) => {
  const [genres] = useAutoAnimate();
  const { data, isLoading, error, isError } = useQuery<
    getRecommendedGenreType,
    Error
  >(["genres"], getRecommendedGenre);

  const [searchParam, setSearchParam] = useSearchParams();

  const [currentSearchParams] = useCurrentSeaarchParams();

  if (isError) return <div>ERROR: {error.message}</div>;

  if (isLoading)
    return (
      <div className="mt-20 mb-20 mx-auto h-10 w-10 rounded-full border-[5px] border-dark-darken border-t-transparent animate-spin"></div>
    );

  const chooseGenre = (genreId: string) => {
    const existingGenres = searchParam.getAll("genre");

    if (existingGenres.includes(genreId)) {
      const newGenres = existingGenres.filter(
        (genre: string) => genre !== genreId
      );
      setSearchParam({
        ...currentSearchParams,
        genre: newGenres,
      });
    } else {
      setSearchParam({
        ...currentSearchParams,
        genre: [...existingGenres, genreId],
      });
    }
  };

  return (
    <ul
      //@ts-ignore
      ref={genres}
      className="flex gap-3 flex-wrap max-h-[200px] overflow-y-auto"
    >
      {currentTab === "movie" &&
        data.movieGenres?.map((genre) => (
          <li key={genre.id}>
            <button
              onClick={() => chooseGenre(String(genre.id))}
              className={`px-4 py-1 border border-[#989898] rounded-full hover:brightness-75 transition duration-300 inline-block ${
                searchParam.getAll("genre").includes(String(genre.id)) &&
                "bg-primary text-white"
              }`}
            >
              {genre.name}
            </button>
          </li>
        ))}
      {currentTab === "tv" &&
        data.tvGenres?.map((genre) => (
          <li key={genre.id}>
            <button
              onClick={() => chooseGenre(String(genre.id))}
              className={`px-4 py-1 border border-[#989898] rounded-full hover:brightness-75 transition duration-300 inline-block ${
                searchParam.getAll("genre").includes(String(genre.id)) &&
                "bg-primary text-white"
              }`}
            >
              {genre.name}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default FilterByGenre;
