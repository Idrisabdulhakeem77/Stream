import { FC, useState, useEffect } from "react";
import Title from "../components/Common/Title";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import MiniSidebar from "../components/Common/MiniSidebar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import Sidebar from "../components/Common/Sidebar";
import SearchBox from "../components/Common/SearchBox";
import ExploreResult from "../components/Explore/ExploreResult";
import { ConfigType } from "../shared/types";
import ExploreFilter from "../components/Explore/ExploreFilter";
import AnimeExplore from '../components/Anime/AnimeExploreFilter'
import AnimeSearchBox from "../components/Common/AnimeSearchBox";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const [searchParams] = useSearchParams();

  const [showScrollBtn, setShowStrollBtn] = useState(false);
  const [isSiderBarActive, setIsSidebarActive] = useState(false);
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab")
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

  const [config, setConfig] = useState<ConfigType>({});
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const changeConfig = (key: string, value: string | number) => {
      setConfig((prevConfig) => ({
        ...prevConfig,
        [key]: value,
      }));
    };

    const sortType = searchParams.get("sort_by") || "popularity.desc";
    changeConfig("sort_by", sortType);

    const genreType = searchParams.getAll("genre") || [];
    changeConfig("with_genres", genreType.toString());

    const minRuntime = Number(searchParams.get("minRuntime")) || 0;
    const maxRuntime = Number(searchParams.get("maxRuntime")) || 200;
    changeConfig("with_runtime.gte", minRuntime);
    changeConfig("with_runtime.lte", maxRuntime);

    const releaseFrom = searchParams.get("from") || "2002-11-04";
    const releaseTo = searchParams.get("to") || "2022-07-28";
    changeConfig("primary_release_date.gte", releaseFrom);
    changeConfig("primary_release_date.lte", releaseTo);
    changeConfig("air_date.gte", releaseFrom);
    changeConfig("air_date.lte", releaseTo);


  const animeSortType = searchParams.get('sort') || "desc"
  changeConfig("sort" , animeSortType)


    // eslint-disable-next-line
  }, [location.search]);

  const { isMobile } = useCurrentViewPort();
  return (
    <>
      <Title value="Explore" />
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

      <div className="flex flex-col-reverse md:flex-row">
        {!isMobile && <MiniSidebar />}
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSiderBarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}

        <div className="flex-grow px-[2vw] pt-6">
          {!isMobile && (
            <div className="flex flex-col-reverse md:flex-row">
              <h2 className="text-lg font-semibold uppercase">
                {" "}
                Find Movies , Tv Shows or Anime that Interest You{" "}
              </h2>
              <div className="relative max-w-[350px] w-full -mt-20 -mr-7">
                {(currentTab === "movie" || currentTab === "tv") && (
                  <SearchBox />
                )} 

                {/* { currentTab === "anime" && (
                   <AnimeSearchBox/>
                )} */}

              </div>
            </div>
          )}

          <div className="flex justify-between items-center md:items-start">
            {/* Button Div */}
            <div className="inline-flex  gap-[40px]  relative pb-3  mt-2 md:mt-4  text-gray-600 ">
              <button
                onClick={() => {
                  setCurrentTab("movie");
                  localStorage.setItem("currentTab", "movie");
                }}
                className={`${
                  currentTab === "movie" &&
                  "font-medium  transition duration-200 hover:text-black after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[10%] after:bg-white"
                }`}
              >
                Movie
              </button>
              <button
                onClick={() => {
                  setCurrentTab("tv");
                  localStorage.setItem("currentTab", "tv");
                }}
                className={`${
                  currentTab === "tv" &&
                  "font-medium  transition duration-200 hover:text-black after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[45%] after:bg-white"
                }`}
              >
                Tv Shows
              </button>
              <button
                onClick={() => {
                  setCurrentTab("anime");
                  localStorage.setItem("currentTab", "anime");
                }}
                className={`${
                  currentTab === "anime" &&
                  "font-medium  transition duration-200 hover:text-black after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[82%] after:bg-white"
                }`}
              >
                Anime
              </button>
            </div>
          </div>
          <ExploreResult currentTab={currentTab} config={config} />
        </div>

        {(currentTab === "movie" || currentTab === "tv") && (
          <>
            <div className="shrink-0 md:max-w-[310px] w-full md:py-12 pt-4 px-3">
              <ExploreFilter currentTab={currentTab} />
            </div>
          </>
        )}

        { currentTab === "anime" && (
           <>
            <div className="shrink-0 md:max-w-[310px] w-full md:py-12 pt-4 px-3">
                <AnimeExplore/>
            </div>
           </>
        )}
      </div>
    </>
  );
};

export default Explore;
