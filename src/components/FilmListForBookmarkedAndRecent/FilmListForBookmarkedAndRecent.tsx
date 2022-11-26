import { FunctionComponent, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAppSelector } from "../../store/hooks";
import { Items } from "../../shared/types";
import Sidebar from "../Common/Sidebar";
import Skeleton from "../Common/Skeleton";
import { updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../shared/firebase";
import { AiOutlineDelete } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  const [currentTab , setCurrentTab] = useState(localStorage.getItem("bookmarkCurrentTab" ) || "all") 
  const [isSelectAll , setIsSelectAll] = useState(false)

  const [parent] = useAutoAnimate();
  const [show] = useAutoAnimate();
  const [action] = useAutoAnimate();

   const clearSelection = () => {
       if(!user) return

       const editedFilms = films.filter(
        (film) => selections.indexOf(film.id) === -1
      );

      updateDoc(doc(db, "users", user?.uid), {
        ...(pageType === "bookmark" && { bookmarks: editedFilms.reverse() }),
        ...(pageType === "recent" && { recentlyWatch: editedFilms.reverse() }),
      });

      setSelections([]);
      setIsSelectAll(false);
      setIsShowPrompt(false);
   }
   
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
              {selections.length === 1 ? " this fil" : " these films"}
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
               onClick={clearSelection}
              className="px-6 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300">
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
              AnimeStream
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
              ref={parent}
              className="flex flex-col md:flex-row items-start md:items-end gap-5 md:justify-between m mb-8"
            > 
               <div className="inline-flex gap-[30px] pb-[14px] border-b border-gray-darken relative">
                   <button
                      onClick={() => {
                        setCurrentTab("all")
                        localStorage.setItem("bookmarkCurrentTab" , "all")
                      }}

                      className={`${
                        currentTab === "all" &&
                        "text-white font-medium after:absolute after:bottom-0 after:left-[0%] after:bg-white after:h-[3px] after:w-5"
                      } transition duration-300 hover:text-white`}
                    >
                       All
                   </button>
                   <button
                      onClick={() => {
                        setCurrentTab("movie")
                        localStorage.setItem("bookmarkCurrentTab" , "movie")
                      }}
                    >
                       Movie
                   </button>

                   <button
                      onClick={() => {
                        setCurrentTab("tv")
                        localStorage.setItem("bookmarkCurrentTab" , "tv")
                      }}
                    >
                       Tv
                   </button>

                   <button
                      onClick={() => {
                        setCurrentTab("anime")
                        localStorage.setItem("bookmarkCurrentTab" , "anime")
                      }}
                    >
                       Anime
                   </button>
               </div>
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmListForBookmarkedAndRecent;
