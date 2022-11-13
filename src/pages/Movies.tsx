import { FC, useState, useEffect } from "react";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import {ExploreMovieResult} from '../components/Explore/ExploreResult'
import {getExploreMovie} from "../services/explore"
import {useInfiniteQuery} from "@tanstack/react-query"

interface MoviesProps {}

const Movies: FC<MoviesProps> = () => {
  const [showScrollBtn, setShowStrollBtn] = useState(false);
  const { isMobile } = useCurrentViewPort();
  const [isSiderBarActive, setIsSidebarActive] = useState(false);

  


  useEffect(() => {
    const checkIfScrollbuttonShowUp = () => {
      const scrollOffset = document.documentElement.scrollTop;

      if (scrollOffset > 1000) {
        setShowStrollBtn(true);
      } else {
        setShowStrollBtn(false);
      }
    };
    window.addEventListener("scroll", checkIfScrollbuttonShowUp);
    return () =>
      window.removeEventListener("scroll", checkIfScrollbuttonShowUp);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {
    data: movies,
    error: errorMovies,
    fetchNextPage: fetchNextPageMovie,
    hasNextPage: hasNextPageMovie,
  } = useInfiniteQuery<ItemsPage, Error>(
    ["explore-result-movie", config],
    ({ pageParam = 1 }) => getExploreMovie(pageParam, config),
    {
      getNextPageParam: (lastPage) =>
        lastPage.page + 1 <= lastPage.total_pages
          ? lastPage.page + 1
          : undefined,
    }
  );
  return ;
};

export default Movies;
