import { useQuery } from "@tanstack/react-query";
import { getAnimeRecommendedGenres } from "../../services/anime";
import { getRecommendedAnimeGenreType } from "../../shared/types";
import { Link } from "react-router-dom";

interface AnimeRecommendedGenreProps {
  currentTab: "anime" | null;
}

const AnimeRecommendedGenre = ({ currentTab }: AnimeRecommendedGenreProps) => {
  const {
    data: animeGenres,
    error,
    isError,
    isLoading,
  } = useQuery<getRecommendedAnimeGenreType, Error>(
    ["genres"],
    getAnimeRecommendedGenres
  );

 console.log(animeGenres?.data)

  if (isError) return <div> Err : {error.message}</div>;
  return (
    <>
      <ul className="mt-24 flex gap-3 flex-wrap  ">
        {animeGenres?.data?.slice(0 ,7).map((genre) => (
          <li key={genre.mal_id} className="mb-1  bg-gray-600 text-black rounded-full p-2"> {genre.name}</li>
        ))}
      </ul>

      <div>Anime Genre</div>
    </>
  );
};

export default AnimeRecommendedGenre;
