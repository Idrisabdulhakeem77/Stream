import { useState, FC } from "react";
import Title from "../components/Common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Common/Sidebar";
import SearchBox from "../components/Common/SearchBox";
import User from "../components/Common/User";
import MainHomeFilms from "../components/Home/MainHomeFilm";
import { useQuery } from "@tanstack/react-query";
import { HomeFilms, Items } from "../shared/types";
import {
  getHomeMovies,
  getMovieBannerInfo,
  getHomeTV,
  getTvBanner,
} from "../services/home";
import RecommendedGenres from "../components/Home/RecommendedGenre";
import PopularThisWeek from "../components/Home/PopularThisWeek";
import { useAppSelector } from "../store/hooks";
import AnimeRecommendedGenre from "../components/Home/AnimeRecommendedGenre";
import MainHomeAnimes from "../components/Home/MainHomeAnimes";
import { getHomeAnimes } from "../services/anime";

const Home: FC = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const {
    data: dataMovie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    error: errorMovie,
  } = useQuery<HomeFilms, Error>(["home movies"], getHomeMovies);

  const {
    data: dataMovieDetail,
    isLoading: isLoadingMovieDetail,
    isError: isErrorMovieDetail,
    error: errorMovieDetail,
  } = useQuery<any, Error>(
    ["detailMovies", dataMovie?.Trending],
    () => getMovieBannerInfo(dataMovie?.Trending as Items[]),
    { enabled: !!dataMovie?.Trending }
  );

  const {
    data: dataTV,
    isLoading: isTvLoading,
    isError: isTvError,
    error: tvError,
  } = useQuery<HomeFilms, Error>(["home-tv"], getHomeTV);

  const {
    data: dataTvDetail,
    isLoading: isTvDetailLoading,
    isError: isTvErrorDetail,
    error: errorTvDetail,
  } = useQuery<any, Error>(
    ["detailMovies", dataMovie?.Trending],
    () => getTvBanner(dataTV?.Trending as Items[]),
    { enabled: !!dataTV?.Trending }
  );

  const {
    data: AnimeData,
    isLoading : isAnimeLoading,
    isError : isAnimeError,
    error : errorAnime,
  } = useQuery<any, Error>(["home-animes"], getHomeAnimes);

  

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab")
  );

  if (isErrorMovieDetail) return <div>ERR : {errorMovieDetail.message} </div>;
  if (isErrorMovie) return <div> ERR : {errorMovie.message} </div>;

  if (isTvErrorDetail) return <div>ERR : {errorTvDetail.message} </div>;
  if (isTvError) return <div> ERR : {tvError.message} </div>;
  if(isAnimeError) return <div>ERR : {errorAnime.message}</div>

  return (
    <>
      <Title value="Anime Stream" />

      <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest text-white">
            {" "}
            Stream{" "}
          </div>
        </Link>
        <button onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex items-start">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex-grow  pt-0 pb-7 border-x md:px-[2vw] px-[4vw] md:border-dark min-h-screen">
          {/* TAB */}
          <div className="flex justify-between items-center md:items-start">
            {/* Button Div */}
            <div className="inline-flex  gap-[40px]  relative pb-3  mt-2 md:mt-4  text-gray-400 ">
              <button
                onClick={() => {
                  setCurrentTab("movie");
                  localStorage.setItem("currentTab", "movie");
                }}
                className={`${
                  currentTab === "movie" &&
                  "font-medium  transition duration-200 hover:text-white   after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[5%] after:bg-white"
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
                  "font-medium  transition duration-200 hover:text-white   after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[45%] after:bg-white"
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
                  "font-medium  transition duration-200 hover:text-white   after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[85%] after:bg-white"
                }`}
              >
                Anime
              </button>
            </div>

            <div className="flex items-center md:hidden gap-4">
              <p> {currentUser ? currentUser.displayName : "Unknown"}</p>
              <img
                src={
                  currentUser
                    ? (currentUser.photoURL as string)
                    : "/Images/user.svg"
                }
                alt="user"
                className="w-7 h-7 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Component contains both the banner Slider and section slideer */}
          {currentTab === "movie" && (
            <MainHomeFilms
              data={dataMovie}
              dataDetails={dataMovieDetail}
              isBannerLoading={isLoadingMovieDetail}
              isSectionLoading={isLoadingMovie}
            />
          )}

          {currentTab === "tv" && (
            <MainHomeFilms
              data={dataTV}
              dataDetails={dataTvDetail}
              isBannerLoading={isTvDetailLoading}
              isSectionLoading={isTvLoading}
            />
          )}

          {currentTab === "anime" && <MainHomeAnimes isLoading={isAnimeLoading} animeData={AnimeData} />}
        </div>

        <div className="shrink-0 max-w-[300px] w-full hidden lg:block px-6 top-0 sticky ">
          <User />
          <SearchBox />
         
        
          {/* {currentTab === "anime" && (
            <AnimeRecommendedGenre currentTab={currentTab} />
          )} */}
                 
          <RecommendedGenres currentTab={currentTab} />
          {/* CurrentTab set to movie dont foeget to make it dynamic */}
          {/* {currentTab === "movie" && (
            <RecommendedGenres currentTab={currentTab} />
          )}
          {currentTab === "tv" && <RecommendedGenres currentTab={currentTab} />} */}
         
          <PopularThisWeek />
        </div>
      </div>
    </>
  );
};

export default Home;
