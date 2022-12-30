import { FunctionComponent, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAppSelector } from "../../store/hooks";
import { Items } from "../../shared/types";
import Sidebar from "../Common/Sidebar";
import Skeleton from "../Common/Skeleton";
import { updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../shared/firebase";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdOutlineCancel } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import BookmarkResults from "../Bookmark/BookmarkResults";

interface FilmListForBookmarkedAndRecentProps {
  films: Items[];
  pageType: string;
  loading: boolean;
}

const FilmListForBookmarkedAndRecent: FunctionComponent<
  FilmListForBookmarkedAndRecentProps
> = ({ films, loading, pageType }) => {
  const user = useAppSelector((state) => state.user.user);
  const [isShowPrompt, setIsShowPrompt] = useState(false);
  const [selections, setSelections] = useState<number[]>([]);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("bookmarkCurrentTab") || "all"
  );
  const [isEditting, setIsEditting] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const [parent] = useAutoAnimate();
  const [show] = useAutoAnimate();
  const [action] = useAutoAnimate();

  const selectAllHandler = () => {
    if (isSelectAll) {
      setSelections([]);
      setIsSelectAll(false);
      return;
    }

    setIsSelectAll(true);

    if (currentTab === "all") {
      setSelections(films.map((film) => film.id));
    } else if (currentTab === "tv") {
      setSelections(
        films.filter((film) => film.media_type === "tv").map((film) => film.id)
      );
    } else if (currentTab === "movie") {
      setSelections(
        films
          .filter((film) => film.media_type === "movie")
          .map((film) => film.id)
      );
    }
  };
  const clearSelection = () => {
    if (!user) return;

    const editedFilms = films.filter(
      (film) => selections.indexOf(film.id) === -1
    );

    console.log(editedFilms);

    updateDoc(doc(db, "users", user?.uid), {
      ...(pageType === "bookmark" && { bookmarks: editedFilms.reverse() }),
      ...(pageType === "recent" && { recentlyWatch: editedFilms.reverse() }),
    });

    setSelections([]);
    setIsSelectAll(false);
    setIsShowPrompt(false);
  };

  return (
    <>
      <div
        // @ts-ignore
        ref={show}
      >
        {isShowPrompt && (
          <div className="fixed top-[30%] md:left-[40%] left-[5%] right-[5%] md:w-[400px] z-40 bg-dark-lighten rounded-md min-h-[100px] shadow-md px-3 py-5 ">
            <div className="mx-auto mb-7 h-16 w-16 rounded-full border-[3px] border-red-500 tw-flex-center">
              <AiOutlineDelete size={40} className="text-red-600" />
            </div>
            <p className="text-white text-xl text-center font-medium mb-4">
              You are about to remove
              {selections.length === 1 ? " this film" : " these films"}
            </p>
            <p className="text-center mb-[2px]">
              This will remove your films from this {pageType} list.
            </p>
            <p className="text-center ">Are you sure?</p>
            <div className=" flex justify-end mt-8">
              <button
                onClick={() => setIsShowPrompt(false)}
                className="px-6 py-1 rounded-md text-white hover:brightness-75 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => console.log("items delted")}
                className="px-6 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300"
              >
                Yes
              </button>
            </div>
            <div
              onClick={() => setIsShowPrompt(false)}
              className="fixed top-0 left-0 w-full h-full z-30 bg-black/60"
            ></div>
          </div>
        )}

        <div className="flex md:hidden justify-between items-center px-5 my-5">
          <Link to="/" className="flex gap-2 items-center">
            <div className="uppercase font-medium text-lg tracking-widest ">
              Stream
            </div>
          </Link>
          <button onClick={() => setIsSidebarActive((prev) => !prev)}>
            <FaBars size={25} />
          </button>
        </div>

        <div className="md:flex hidden gap-6 items-center absolute top-4 right-5">
          <p> {user?.displayName || "Unknown"}</p>
          <LazyLoadImage
            src={user ? (user.photoURL as string) : "/user.svg"}
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
            effect="opacity"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex">
          <Sidebar
            isSidebarOpen={isSidebarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
          <div className="flex-grow  px-[2vw] pb-16 pt-7 min-h-screen">
            <h1 className="uppercase  font-semibold text-[25px] mb-4  ">
              {pageType === "bookmark"
                ? "My favourite films"
                : "Films I Watched"}
            </h1>
            <div
              // @ts-ignore
              ref={action}
              className="flex flex-col md:flex-row  items-start md:items-center gap-5 md:justify-between mb-8"

            >
              <div className="inline-flex gap-[30px] pb-[12px] border-b border-gray-darken relative">
                <button
                  onClick={() => {
                    setCurrentTab("all");
                    localStorage.setItem("bookmarkCurrentTab", "all");
                  }}
                  className={`${
                    currentTab === "all" &&
                    "text-white font-medium after:absolute after:bottom-0 after:left-[0%] after:bg-white after:h-[3px] after:w-5"
                  } transition duration-300 hover:text-white`}
                >
                  All
                </button>
                <button
                  className={`${
                    currentTab === "movie" &&
                    "text-white font-medium after:absolute after:bottom-0 after:left-[30%] after:bg-white after:h-[3px] after:w-5"
                  } transition duration-300 hover:text-white`}
                  onClick={() => {
                    setCurrentTab("movie");
                    localStorage.setItem("bookmarkCurrentTab", "movie");
                  }}
                >
                  Movie
                </button>

                <button
                  className={`${
                    currentTab === "tv" &&
                    "text-white font-medium after:absolute after:bottom-0 after:left-[57%] after:bg-white after:h-[3px] after:w-5"
                  } transition duration-300 hover:text-white`}
                  onClick={() => {
                    setCurrentTab("tv");
                    localStorage.setItem("bookmarkCurrentTab", "tv");
                  }}
                >
                  Tv
                </button>

                <button
                  className={`${
                    currentTab === "anime" &&
                    "text-white font-medium after:absolute after:bottom-0 after:left-[83%] after:bg-white after:h-[3px] after:w-5"
                  } transition duration-300 hover:text-white`}
                  onClick={() => {
                    setCurrentTab("anime");
                    localStorage.setItem("bookmarkCurrentTab", "anime");
                  }}
                >
                  Anime
                </button>
              </div>

              {!isEditting && (
                <button
                  onClick={() => setIsEditting(true)}
                  className="self-end text-lg hover:text-primary transition duration-300 flex gap-2 items-center "
                >
                  <AiOutlineEdit size={25} />
                  <p>Edit</p>
                </button>
              )}

              {isEditting && (
                <div className="flex gap-2  ">
                  <button
                    onClick={selectAllHandler}
                    className={`flex gap-2 items-center  hover:text-primary transition duration-300  ${
                      isSelectAll ? "text-primary" : "!text-gray-lighten"
                    } `}
                  >
                    <BiSelectMultiple size={25} />
                    <p> Select All</p>
                  </button>
                  <button
                    disabled={selections.length === 0}
                    onClick={() => setIsShowPrompt(true)}
                    className="disabled:text-red flex gap-2 items-center  hover:text-primary transition duration-300 "
                  >
                    <AiOutlineDelete size={25} />
                    <p> Delete</p>
                  </button>
                  <button
                    onClick={() => setIsEditting(false)}
                    className="flex gap-2 items-center hover:text-primary transition duration-300"
                  >
                    <MdOutlineCancel size={25} />
                    <p>Cancel</p>
                  </button>
                </div>
              )}
            </div>

            <ul
              // @ts-ignore
              ref={parent}
              className={`grid grid-cols-sm md:grid-cols-lg gap-x-8 gap-y-10 ${
                isEditting && "!gap-y-16"
              }`}
            >
              {loading &&
                [...new Array(6)].map((_, index) => (
                  <li key={index}>
                    <Skeleton classID="h-0 pb-[160%]" />
                  </li>
                ))}

              {currentTab === "all" && (
                <BookmarkResults
                  films={films}
                  isEditting={isEditting}
                  isLoading={loading}
                  pageType={pageType}
                  selections={selections}
                  setSelection={setSelections}
                />
              )}

              {currentTab === "tv" && (
                <BookmarkResults
                  films={films.filter((film) => film.media_type === "tv")}
                  isEditting={isEditting}
                  selections={selections}
                  setSelection={setSelections}
                  isLoading={loading}
                  pageType={pageType}
                />
              )}

              {currentTab === "movie" && (
                <BookmarkResults
                  films={films?.filter((film) => film.media_type === "movie")}
                  isEditting={isEditting}
                  selections={selections}
                  setSelection={setSelections}
                  isLoading={loading}
                  pageType={pageType}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmListForBookmarkedAndRecent;
