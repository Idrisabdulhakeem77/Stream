import { FC, useState, useEffect } from "react";
import Title from "../components/Common/Title";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import MiniSidebar from "../components/Common/MiniSidebar";
import Sidebar from "../components/Common/Sidebar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AnimeItempage } from "../shared/types";
import { getAnime } from "../services/anime";

interface AnimeProps {}

const Anime: FC<AnimeProps> = () => {
  const [showScrollBtn, setShowStrollBtn] = useState(false);
  const { isMobile } = useCurrentViewPort();
  const [isSiderBarActive, setIsSidebarActive] = useState(false);

  const {
    data: animes,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<AnimeItempage, Error>(
    ["animes"],
    ({ pageParam = 1 }) => getAnime(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.pagination.current_page + 1 <=
        lastPage.pagination.last_visible_page
          ? lastPage.pagination.current_page + 1
          : undefined,
    }
  );
  // const {
  //   data
  //   error ,
  //   fetchNextPage: fetchNextPageMovie,
  //   hasNextPage: hasNextPageMovie,
  // } = useInfiniteQuery<ItemsPage, Error>(
  //   ["explore-result-movie", config],
  //   ({ pageParam = 1 }) => getExploreMovie(pageParam, config),
  //   {
  //     getNextPageParam: (lastPage) =>
  //       lastPage.page + 1 <= lastPage.total_pages
  //         ? lastPage.page + 1
  //         : undefined,
  //   }
  // );

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
  return (
    <>
      <Title value="Anime" />
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-[30px] right-[30px] z-10 transition duration-500 ${
            showScrollBtn ? "opacity-100" : "opacity-0"
          }`}
        >
          <BsFillArrowUpCircleFill
            size={35}
            className="hover:brightness-75 transition duration-300"
          />
        </button>
      )}

      <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest">
            {" "}
            Stream{" "}
          </div>
        </Link>
        <button onClick={() => setIsSidebarActive((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex flex-row">
        {!isMobile && <MiniSidebar />}
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSiderBarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}
      </div>

      <div>

         
      </div>
    </>
  );
};

export default Anime;
