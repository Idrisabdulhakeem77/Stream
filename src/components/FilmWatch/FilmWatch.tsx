import { useState, useEffect } from "react";
import Skeleton from "../Common/Skeleton";
import {
  Episode,
  getWatchReturnedType,
  DetailMovie,
  DetailTV,
  Items,
} from "../../shared/types";
import { useAppSelector } from "../../store/hooks";
import Title from "../Common/Title";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Common/Sidebar";
import MiniSidebar from "../Common/MiniSidebar";
import { embedMovie, embedTV } from "../../shared/utils";
import SearchBox from "../Common/SearchBox";
import { AiTwotoneCalendar, AiFillStar } from "react-icons/ai";
import Comment from "./comment/Comment";
import Readmore from "../Common/ReadMore";
import Footer from "../Common/Footer";
import { BsThreeDotsVertical } from "react-icons/bs";
import RightbarFilms from "../Common/RightbarFilms";
import SeasonSelection from "./SeasonSelection";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../../shared/firebase";

interface FilmWatchProps {
  media_type: "tv" | "movie";
  seasonId?: number;
  episodeId?: number;
  currentEpisode?: Episode;
}

const FilmWatch = ({
  media_type,
  detail,
  seasonId,
  episodeId,
  currentEpisode,
  detailSeasons,
  recommendations,
}: FilmWatchProps & getWatchReturnedType) => {
  const currentUser = useAppSelector((state) => state.user.user);
  const { isMobile } = useCurrentViewPort();

  const [isSiebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    if (!detail) return;

    getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
      const isAlreadyStored = docSnap
        .data()
        ?.recentlyWatch.some((film: Items) => film.id === detail?.id);

      console.log(isAlreadyStored);

      if (!isAlreadyStored) {
        updateDoc(doc(db, "users", currentUser.uid), {
          recentlyWatched: arrayUnion({
            poster_path: detail?.poster_path,
            id: detail?.id,
            vote_average: detail?.vote_average,
            media_type: media_type,
            ...(media_type === "movie" && {
              title: (detail as DetailMovie)?.title,
            }),
            ...(media_type === "tv" && { name: (detail as DetailTV)?.name }),
          }),
        });
      } else {
        const updatedRecentlyWatch = docSnap
          .data()
          ?.recentlyWatch.filter((film: Items) => film.id !== detail?.id)
          .concat({
            poster_path: detail?.poster_path,
            id: detail?.id,
            vote_average: detail?.vote_average,
            media_type: media_type,
            ...(media_type === "movie" && {
              title: (detail as DetailMovie)?.title,
            }),
            ...(media_type === "tv" && { name: (detail as DetailTV)?.name }),
          });

        updateDoc(doc(db, "users", currentUser.uid), {
          recentlyWatch: updatedRecentlyWatch,
        });
      }
    });
  }, [currentUser, detail, media_type]);

  return (
    <>
      {detail && (
        <Title
          value={`Watch: ${
            (detail as DetailMovie).title || (detail as DetailTV).name
          } ${
            media_type === "tv" ? `- Season ${seasonId} - Ep ${episodeId}` : ""
          } | Moonlight`}
        />
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

      <div className="flex flex-col md:flex-row">
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSiebarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}
        {!isMobile && <MiniSidebar />}

        <div className="flex-grow px-[2vw] pt-0 md:pt-11">
          <div className="relative h-0 pb-[56.25%]">
            {!detail && (
              <Skeleton className="absolute top-0 left-0 w-full h-full rounded-sm" />
            )}

            {detail && (
              <iframe
                className="absolute w-full h-full top-0 left-0"
                src={
                  media_type === "movie"
                    ? embedMovie(detail.id)
                    : embedTV(
                        detail.id,
                        seasonId as number,
                        episodeId as number
                      )
                }
                title="Film Video Player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="pb-8 mt-5">
            <div className="flex justify-between md:text-base text-sm">
              <div className="flex-1">
                {!detail && <Skeleton className="h-8 w-[400px]" />}
                {detail && (
                  <h1 className="text-white md:text-3xl text-xl font-medium">
                    <Link
                      to={
                        media_type === "movie"
                          ? `/movie/${detail.id}`
                          : `/tv/${detail.id}`
                      }
                      className="hover:brightness-75 transition duration-300"
                    >
                      {(detail as DetailMovie).title ||
                        (detail as DetailTV).name}
                    </Link>
                  </h1>
                )}

                {!detail && <Skeleton className="w-[100px] h-[23px] mt-5" />}
                {detail && (
                  <div className="flex gap-5 mt-5">
                    <div className="flex gap-2 items-center">
                      <AiFillStar size={25} className="text-primary" />
                      {media_type === "movie" && (
                        <p>{detail.vote_average.toFixed(1)}</p>
                      )}
                      {media_type === "tv" && (
                        <p>{currentEpisode?.vote_average.toFixed(1)}</p>
                      )}
                    </div>
                    <div className="flex gap-2 items-center">
                      <AiTwotoneCalendar size={25} className="text-primary" />
                      <p>
                        {media_type === "movie" &&
                          new Date(
                            (detail as DetailMovie).release_date
                          ).getFullYear()}
                        {media_type === "tv" &&
                          new Date(
                            (currentEpisode as Episode).air_date
                          ).getFullYear()}
                      </p>
                    </div>
                  </div>
                )}

                {!detail && <Skeleton className="w-[100px] h-[23px] mt-2" />}
                {!isMobile && detail && (
                  <ul className="flex gap-2 flex-wrap mt-3">
                    {detail.genres.map((genre) => (
                      <li key={genre.id} className="mb-2">
                        <Link
                          to={`/explore?genre=${genre.id}`}
                          className="px-3 py-1 bg-dark-lighten rounded-full hover:brightness-75 duration-300 transition"
                        >
                          {genre.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {media_type === "tv" && currentEpisode && (
                <div className="flex-1">
                  <h2 className="md:text-xl italic uppercase text-gray-200 mt-2 text-right">
                    {currentEpisode.name}
                  </h2>
                  <p className="text-right md:text-lg mt-2">
                    Season {seasonId} &#8212; Episode {episodeId}
                  </p>
                </div>
              )}
            </div>
            {isMobile && detail && (
              <ul className="flex gap-2 flex-wrap mt-3">
                {detail.genres.map((genre) => (
                  <li key={genre.id} className="mb-2">
                    <Link
                      to={`/explore?genre=${genre.id}`}
                      className="px-3 py-1 bg-dark-lighten rounded-full hover:brightness-75 duration-300 transition"
                    >
                      {genre.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="md:text-xl text-lg font-medium text-white mt-5">
              Overview:
            </div>
            {!detail && <Skeleton className="h-[84px] mt-2" />}
            {detail && (
              <Readmore
                limitTextNumber={300}
                className="md:text-lg text-base mt-1"
              >
                {media_type === "movie"
                  ? detail.overview
                  : currentEpisode?.overview}
              </Readmore>
            )}
          </div>
          <Comment media_type={media_type} id={detail?.id} />
        </div>

        <div className="shrink-0 md:max-w-[400px] w-full relative px-6">
          {!isMobile && <SearchBox />}
          {media_type === "movie" && (
            <RightbarFilms
              films={recommendations?.filter((item) => item.id !== detail?.id)}
              isLoading={!recommendations}
              className="md:mt-36 mt-0"
              name="Similar"
              limitNumber={7}
            />
          )}

          {media_type === "tv" && (
            <div className="md:mt-36 mt-0">
              <p className="mb-6 text-xl font-medium flex justify-between items-center">
                <span className="text-white">Seasons:</span>
                <BsThreeDotsVertical size={20} />
              </p>
              <SeasonSelection
                detailSeasons={detailSeasons}
                episodeId={episodeId}
                seasonId={seasonId}
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FilmWatch;
