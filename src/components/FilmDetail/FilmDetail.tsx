import { FC, useEffect, useState } from "react";
import { DetailMovie, DetailTV, FilmInfo } from "../../shared/types";
import { useAppSelector } from "../../store/hooks";
import Title from "../Common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Common/Sidebar";
import Skeleton from "../Common/Skeleton";
import { resizeImage } from "../../shared/utils";
import { BsPlay, BsThreeDots, BsShareFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import MiniSidebar from "../Common/MiniSidebar";
import SearchBox from "../Common/SearchBox";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import RightbarFilms from "../Common/RightbarFilms";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { onSnapshot } from "firebase/firestore";
import { doc, arrayRemove, arrayUnion, updateDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../../shared/firebase";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import FilmTabInfo from "./FilmTabInfo";

const FilmDetail: FC<FilmInfo> = ({
  similar,
  detail,
  credits,
  videos,
  reviews,
}) => {
  const currentUser = useAppSelector((state) => state.user.user);
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const { isMobile } = useCurrentViewPort();

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const unsubDoc = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
      setIsBookMarked(
        doc.data()?.bookmarks.some((item: any) => item.id === detail?.id)
      );
    });

    return () => unsubDoc();
  }, [currentUser, detail?.id]);

  const bookmarkedHandler = async () => {
    if (!detail) return;

    if (!currentUser) {
      toast.error("You need to sign in to bookmark films", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    await updateDoc(doc(db, "users", currentUser.uid), {
      bookmarks: !isBookMarked
        ? arrayUnion({
            poster_path: detail?.poster_path,
            id: detail?.id,
            vote_average: detail?.vote_average,
            media_type: detail?.media_type,
            ...(detail?.media_type === "movie" && { title: detail?.title }),
            ...(detail?.media_type === "tv" && { name: detail?.name }),
          })
        : arrayRemove({
            poster_path: detail?.poster_path,
            id: detail?.id,
            vote_average: detail?.vote_average,
            media_type: detail?.media_type,
            ...(detail?.media_type === "movie" && { title: detail?.title }),
            ...(detail?.media_type === "tv" && { name: detail?.name }),
          }),
    });

    toast.success(
      `${
        !isBookMarked
          ? "This film is now bookmarked"
          : "This film is removed from your bookmarks"
      }`,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <>
      <ToastContainer />
      {detail ? (
        <Title
          value={`${
            (detail as DetailTV).name || (detail as DetailMovie).title
          } | Stream`}
        />
      ) : null}

      <div className="flex justify-between items-center my-4 px-4 md:hidden">
        {/* <div className="bg-gradient-to-br from-transparent to-black/70 h-full rounded-bl-2xl"> */}
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest ">
            Stream
          </div>
        </Link>
        <button onClick={() => setIsSidebarActive((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex items-start flex-col md:flex-row ">
        { !isMobile  && <MiniSidebar />}
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSidebarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}
        <div className="flex-grow  w-full">
          {!detail && <Skeleton className="h-[400px] rounded-bl-2xl" />}

          {detail && (
            <div
              style={{
                backgroundImage: `url(${resizeImage(detail.backdrop_path)})`,
              }}
              className="bg-no-repeat bg-center bg-cover md:h-[400px] h-[300px] rounded-md relative"
            >
              <div className="bg-gradient-to-br from-transparent to-black/80 h-full rounded-bl-2xl">
                <div className="flex flex-col md:flex-row bottom-[-85%] md:bottom-[-20%]  items-start absolute left-1/2 -translate-x-1/2  w-full max-w-[1000px]">
                  <div className="flex gap-5 items-center">
                    <div className="shrink-0 w-[185px] ml-3 md:ml-0">
                      <LazyLoadImage
                        src={resizeImage(detail.poster_path, "w185")}
                        effect="opacity"
                        className="w-full h-full object-cover rounded-md"
                        alt="Poster"
                      />
                    </div>
                    {isMobile && (
                      <Link
                        to="watch"
                        className="flex gap-6 items-center pl-6 pr-12 py-3 rounded-full bg-primary text-white hover:bg-red-800 transition duration-300 mt-24 "
                      >
                        <BsPlay size={25} />
                        <span className="text-lg font-medium">WATCH</span>
                      </Link>
                    )}
                  </div>

                  <div className="flex-grow md:ml-14 ml-6 mt-6 md:mt-0">
                    <div className="md:h-28 flex items-end">
                      <h1 className=" text-white text-[45px] font-bold leading-tight ">
                        {(detail as DetailMovie).title ||
                          (detail as DetailTV).name}
                      </h1>
                    </div>
                    <ul className="flex gap-3 flex-wrap md:mt-7 mt-3">
                      {detail.genres.slice(0, 3).map((genre) => (
                        <li key={genre.id} className="mb-3">
                          <Link
                            to={`/explore?genre=${genre.id}`}
                            className="md:px-5 px-3 md:py-2 py-1 rounded-full uppercase font-medium border border-gray-300 md:text-white hover:brightness-75 transition duration-300"
                          >
                            {genre.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!isMobile && (
                    <Link
                      to="watch"
                      className="flex gap-6 items-center pl-6 pr-12 py-3 rounded-full bg-primary text-white hover:bg-red-600 transition duration-300 mt-24 "
                    >
                      <BsPlay size={25} />
                      <span className="text-lg font-medium">WATCH</span>
                    </Link>
                  )}
                </div>

                <div className="flex gap-3 absolute top-[5%] right-[3%]">
                  <button
                    onClick={bookmarkedHandler}
                    className={`tw-flex-center h-12 w-12 rounded-full border-[3px] border-white shadow-lg hover:border-primary transition duration-300 group ${
                      isBookMarked && "!border-primary"
                    }`}
                  >
                    <AiFillHeart
                      size={20}
                      className={`text-white group-hover:text-primary transition duration-300 ${
                        isBookMarked && "!text-primary"
                      }`}
                    />
                  </button>
                  {!isMobile && (
                    <>
                      <button className="tw-flex-center h-12 w-12 rounded-full border-[3px] border-white shadow-lg hover:border-primary transition duration-300 group">
                        <BsShareFill
                          size={20}
                          className="text-white group-hover:text-primary transition duration-300"
                        />
                      </button>
                      <button className="tw-flex-center h-12 w-12 rounded-full border-[3px] border-white shadow-lg hover:border-primary transition duration-300 group">
                        <BsThreeDots
                          size={20}
                          className="text-white group-hover:text-primary transition duration-300"
                        />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            className="flex z-20 relative flex-col md:flex-row mt-32 md:mt-0
           "
          >
            {!isMobile && (
              <div className="shrink-0 md:max-w-[150px] w-full flex items-center md:flex-col justify-center flex-row gap-20 mt-20 md:border-r border-dark-lighten pt-16">
                <div className="flex flex-col gap-6 items-center">
                  <p className="text-white font-medium text-lg">RATING</p>
                  {!isMobile && (
                    <div className="w-16">
                      {detail && (
                        <CircularProgressbar
                          value={detail.vote_average}
                          maxValue={10}
                          text={`${detail.vote_average.toFixed(1)}`}
                          styles={buildStyles({
                            textSize: "25px",
                            pathColor: `rgba(255, 255, 255, ${
                              (detail.vote_average * 10) / 100
                            })`,
                            textColor: "#fff",
                            trailColor: "transparent",
                            backgroundColor: "#5179ff",
                          })}
                        />
                      )}
                      {!detail && (
                        <Skeleton className="w-16 h-16 rounded-full" />
                      )}
                    </div>
                  )}
                  {isMobile && detail && (
                    <p className="text-2xl -mt-3">
                      {detail.vote_average.toFixed(1)}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 items-center">
                  {detail && (
                    <>
                      <p className="text-white font-medium text-lg">
                        {detail.media_type === "movie"
                          ? "RUNTIME"
                          : "EP LENGTH"}
                      </p>
                      <div className="flex gap-2 items-center">
                        {detail.media_type === "movie" && (
                          <p className="text-2xl">
                            {(detail as DetailMovie).runtime}
                          </p>
                        )}
                        {detail.media_type === "tv" && (
                          <p className="text-2xl">
                            {(detail as DetailTV).episode_run_time[0]}
                          </p>
                        )}
                        <span>min</span>
                      </div>
                    </>
                  )}
                  {!detail && (
                    <>
                      <p className="text-white font-medium text-lg">RUNTIME</p>
                      <Skeleton className="w-14 h-6" />
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="flex-grow min-h-[500px] md:border-r border-dark-lighten md:px-16 px-5 md:py-7 pt-40">
              <FilmTabInfo
                detail={detail}
                credits={credits}
                reviews={reviews}
              />
            </div>

            {isMobile && (
              <div className="shrink-0 md:max-w-[150px] w-full flex items-center md:flex-col justify-center flex-row gap-20  md:border-r border-dark-lighten md:pt-16 pt-0 md:mt-20 mt-8">
                <div className="flex flex-col gap-6 items-center">
                  <p className="text-white font-medium text-lg">RATING</p>
                  {!isMobile && (
                    <div className="w-16">
                      {detail && (
                        <CircularProgressbar
                          value={detail.vote_average}
                          maxValue={10}
                          text={`${detail.vote_average.toFixed(1)}`}
                          styles={buildStyles({
                            textSize: "25px",
                            pathColor: `rgba(81, 121, 255, ${
                              (detail.vote_average * 10) / 100
                            })`,
                            textColor: "#fff",
                            trailColor: "transparent",
                            backgroundColor: "#5179ff",
                          })}
                        />
                      )}
                      {!detail && (
                        <Skeleton className="w-16 h-16 rounded-full" />
                      )}
                    </div>
                  )}
                  {isMobile && detail && (
                    <p className="text-2xl -mt-3">
                      {detail.vote_average.toFixed(1)}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 items-center">
                  {detail && (
                    <>
                      <p className="text-white font-medium text-lg">
                        {detail.media_type === "movie"
                          ? "RUNTIME"
                          : "EP LENGTH"}
                      </p>
                      <div className="flex gap-2 items-center">
                        {detail.media_type === "movie" && (
                          <p className="text-2xl">
                            {(detail as DetailMovie).runtime}
                          </p>
                        )}
                        {detail.media_type === "tv" && (
                          <p className="text-2xl">
                            {(detail as DetailTV).episode_run_time[0]}
                          </p>
                        )}
                        <span>min</span>
                      </div>
                    </>
                  )}
                  {!detail && (
                    <>
                      <p className="text-white font-medium text-lg">RUNTIME</p>
                      <Skeleton className="w-14 h-6" />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="shrink-0 md:max-w-[310px] w-full relative px-6">
          {!isMobile && <SearchBox />}
          <RightbarFilms
            name="Similar"
            films={similar?.filter((item) => item.id !== detail?.id)}
            limitNumber={4}
            isLoading={!similar}
            className="md:mt-32 mt-12"
          />
        </div>
      </div>
    </>
  );
};

export default FilmDetail;
