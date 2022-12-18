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
import InfiniteScroll from "react-infinite-scroll-component";
import AnimeItem from "../components/Common/AnimeItem";
import Skeleton from "../components/Common/Skeleton";
import AnimeSearchBox from "../components/Common/AnimeSearchBox";
import AnimeExplore from "../components/Anime/AnimeExploreFilter";
import { useSearchParams } from "react-router-dom"


interface AnimeProps {}

const Anime: FC<AnimeProps> = () => {
  const [showScrollBtn, setShowStrollBtn] = useState(false);
  const { isMobile } = useCurrentViewPort();
  const [isSiderBarActive, setIsSidebarActive] = useState(false);


  const {
    data: animes,
    error,
    isLoading,
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
  if (error) return <div> Error : {error.message}</div>;


  
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

        <div className="flex-grow px-[2vw] pt-6">
          {/* <AnimeSearchBox  autoFocus/> */}
         
           <div>          {animes?.pages.reduce(
            (acc, current) => [...acc, current.data],
            [] as any
          ).length === 0 ? (
            <div>no such anime</div>
          ) : (
            <InfiniteScroll
              dataLength={animes?.pages.length || 0}
              next={() => fetchNextPage()}
              hasMore={Boolean(hasNextPage)}
              loader={<div>Loading more</div>}
              endMessage={<></>}
            >
              <div className="">
                {animes?.pages.map((page) => {
                  const { data } = page;
                  return (
                    <ul className="grid grid-cols-sm lg:grid-cols-lg gap-x-8 gap-y-10 pt-2">
                      {data?.map((d) => (
                        <li key={d.mal_id}>
                          <AnimeItem item={d} key={d.mal_id} />
                        </li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </InfiniteScroll>
          )}
          </div>

        </div>

        <div className="shrink-0 max-w-[310px] w-full hidden lg:block px-6 top-0 sticky">
          <AnimeExplore />
        </div>
      </div>
    </>
  );
};

export default Anime;
