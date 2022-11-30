import { Animes } from "../../shared/types";
import AnimeItem from "../Common/AnimeItem";

interface MainHomeAnimesProp {
  isLoading: boolean;
  animeData: Animes[] | undefined;
}

const MainHomeAnimes = ({ animeData, isLoading }: MainHomeAnimesProp) => {
  console.log(animeData);

  return (
    <>
      {animeData?.map((anime) => (
        // grid-cols-sm lg:grid-cols-lg
        <ul className="grid  gap-x-8 gap-y-10 pt-2">
          <li key={anime.mal_id}>
            <AnimeItem key={anime.mal_id} item={anime} />
          </li>
        </ul>
      ))}
    </>
  );
};

export default MainHomeAnimes;
