import { FC, useState, useEffect } from "react";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import { getExploreTV } from "../services/explore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ItemsPage } from "../shared/types";

import Sidebar from "../components/Common/Sidebar";
import MiniSidebar from "../components/Common/MiniSidebar";
import Title from "../components/Common/Title";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import InfiniteScroll from 'react-infinite-scroll-component'
import FilmItem from "../components/Common/FilmItem";
import {Link} from 'react-router-dom'

interface MoviesProps {}

const TvShows: FC<MoviesProps> = () => {
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
    data: tvs,
    error: errorTvs,
    fetchNextPage: fetchNextPageTv,
    hasNextPage: hasNextPageTv,
  } = useInfiniteQuery<ItemsPage, Error>(
    ["explore-result-tv"],
    ({ pageParam = 1, queryKey }) =>
      getExploreTV(pageParam, queryKey[1] as { [key: string]: string }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.page + 1 <= lastPage.total_pages
          ? lastPage.page + 1
          : undefined,
    }
  );

  if(errorTvs) return <div> Error : {errorTvs.message} </div>
  return (
    <>
      <Title value="Movie | Stream" />

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
      <div className=" flex flex-col-reverse md:flex-row ">
        {isMobile ? (
          <Sidebar
            setIsSidebarOpen={setIsSidebarActive}
            isSidebarOpen={isSiderBarActive}
          />
        ) : null}
        {!isMobile ? <MiniSidebar /> : null}

        <div className="flex-grow px-[2vw] pt-6">
          {tvs?.pages.reduce(
            (acc, current) => [...acc, current.results],
            [] as any
          ).length === 0 ? (
            <div>no such anime</div>
          ) : (
            <InfiniteScroll
              dataLength={tvs?.pages.length || 0}
              next={() => fetchNextPageTv()}
              hasMore={Boolean(hasNextPageTv)}
              loader={<div>Loading more</div>}
              endMessage={<></>}
            >
              <div className="">
                {tvs?.pages.map((page) => {
                  const { results } = page;
                  return (
                    <ul className="grid grid-cols-sm lg:grid-cols-lg gap-x-8 gap-y-10 pt-2">
                      {results.map((item) => (
                        <li >
                          <FilmItem item={item} key={item.id} />
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
    </>
  );
};

export default TvShows;
