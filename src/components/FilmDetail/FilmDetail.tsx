import { FC, useState } from "react";
import { DetailMovie, DetailTV, FilmInfo } from "../../shared/types";
import { useAppSelector } from "../../store/hooks";
import Title from "../Common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Common/Sidebar";
import Skeleton from "../Common/Skeleton";
import { resizeImage } from "../../shared/utils";
import { BsPlay } from "react-icons/bs";
import MiniSidebar from "../Common/MiniSidebar";
import SearchBox from "../Common/SearchBox";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import RightbarFilms from "../Common/RightbarFilms";

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

  return (
    <>
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
            AnimeStream
          </div>
        </Link>
        <button onClick={() => setIsSidebarActive((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex items-start">
        <MiniSidebar />
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSidebarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}
        <div className="flex-grow ">
          {!detail && (
            <Skeleton className="h-[400px] rounded-bl-2xl" />
          )}

           { detail && (
              <div style={{ backgroundImage : `url(${resizeImage(detail.backdrop_path)})`}}
                className="bg-no-repeat bg-center bg-cover"
               >

              </div>
           )}
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
