import { getAnimeRecommendedGenres } from "../../services/anime";
import { useQuery } from "@tanstack/react-query";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { getRecommendedAnimeGenreType } from "../../shared/types";

interface AnimeFilterByGenreProps {}

const AnimeFilterByGenre = () => {
  const { data, isLoading } = useQuery<
    getRecommendedAnimeGenreType,
    Error
  >(["genres"], getAnimeRecommendedGenres);
   

  // Reduced the amount of incoming genres to 15 
  const usedGenres = data?.data.slice(0, 15);


  const [genres] = useAutoAnimate();

  if (isLoading)
  return <div className="mt-20 mb-20 mx-auto h-10 w-10 rounded-full border-[5px] border-dark-darken border-t-transparent animate-spin"></div>

  return (
    <ul
      //@ts-ignore
      ref={genres}
      className="flex gap-3 flex-wrap max-h-[200px] overflow-y-auto"
    >
      {usedGenres?.map((genre) => (
        <li key={genre.mal_id}>
          <button
            className={`px-4 py-1 border border-[#989898] rounded-full hover:brightness-75 transition duration-300 inline-block`}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AnimeFilterByGenre;
