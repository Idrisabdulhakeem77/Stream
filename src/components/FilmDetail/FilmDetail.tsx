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
        <Sidebar
          isSidebarOpen={isSidebarActive}
          setIsSidebarOpen={setIsSidebarActive}
        />
        <div className="flex-grow ">
          {!detail ? <Skeleton className="h-[400px] rounded-bl-2xl>" /> : null}
          {/* {detail ? (
            <div
              style={{
                backgroundImage: `url(${resizeImage(detail.backdrop_path)})`,
              }}
              className="bg-cover bg-no-repeat bg-center md:h-[400px] h-[300px] relative"
            >  <div className="bg-gradient-to-br from-transparent to-black/70 h-full rounded-bl-2xl">
              </div>
              <div
                className="text-white w-[400px] h-[300px] absolute top-9 font-extrabold right-10"
                id="image-container"
              >
                <h1 className="text-[40px] mb-4">
                  {" "}
                  {(detail as DetailTV).name ||
                    (detail as DetailMovie).title}{" "}
                </h1>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    {detail.genres.map((genre) => (
                      <li key={genre.id} className="mb-4 list-none">
                        {genre.name}
                      </li>
                    ))}
                  </div>
                  <div>
                    {`${(detail as DetailMovie).vote_average.toFixed(1)} / 10 `}
                  </div>
                </div>
                <div>
                  <p>{(detail as DetailMovie).overview}</p>
                </div>
                <div className="flex gap-4">
                  <button className="py-4 px-4 rounded-full bg-black text-white">
                    {" "}
                    Add to Bookmark
                  </button>
                  <button className="py-4 px-4 bg-black text-white flex gap-2 rounded-full">
                    <BsPlay size={25}/>
                    <span> Play Trailer </span>
                  </button>
                </div>
              </div>
            </div>
          ) : null} */}
        </div>
      </div>
    </>
  );
};

export default FilmDetail;
