import { useQuery } from "@tanstack/react-query";
import { getAnimeRecommendedGenres } from "../../services/anime";
import { getRecommendedGenreType } from "../../shared/types";
import { Link } from "react-router-dom";

interface AnimeRecommendedGenreProps {
  currentTab: "anime" | null;
}

const AnimeRecommendedGenre = ({ currentTab }: AnimeRecommendedGenreProps) => {
  const { data : animeGenres, error, isError, isLoading } = useQuery<
    getRecommendedGenreType,
    Error
  >(["genres"], getAnimeRecommendedGenres);

  if (isError) return <div> Err : {error.message}</div>;
  return <ul className="mt-24 flex gap-3 flex-wrap  ">
     {}
  </ul>;
};

export default AnimeRecommendedGenre;
