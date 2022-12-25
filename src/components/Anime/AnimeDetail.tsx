import { toast, ToastContainer } from "react-toastify";
import Title from "../Common/Title";
import { Animes } from "../../shared/types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import MiniSidebar from "../Common/MiniSidebar";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import Sidebar from "../Common/Sidebar";
import AnimeSearchBox from "../Common/AnimeSearchBox";
import AnimeRightBar from "../Common/AnimeRightBarFilms";
import AnimeRightBarFilms from "../Common/AnimeRightBarFilms";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AnimeTabInfo from "./AnimeTabInfo";
import { BsPlay, BsShareFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useAppSelector } from "../../store/hooks";
import {
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../shared/firebase";

interface AnimeDetailProps {
  characters: any;
  detail: Animes;
  recommendations: any;
  reviews: any;
}

const AnimeDetail = ({
  characters,
  detail,
  recommendations,
  reviews,
}: AnimeDetailProps) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);
  const { isMobile } = useCurrentViewPort();

  const currentUser = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (!currentUser) return;

    const unSubscribeDoc = onSnapshot(
      doc(db, "users", currentUser.uid),
      (doc) => {
        setIsBookMarked(
          doc
            .data()
            ?.bookmarks.some((item: any) => item.mal_id === detail?.mal_id)
        );
      }
    );

    return () => unSubscribeDoc();
  }, [currentUser, detail?.mal_id]);

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
            poster_path: detail?.images?.jpg.image_url,
            id: detail?.mal_id,
            vote_average: detail?.score,
            title: detail?.title,
            media_type: "anime",
          })
        : arrayRemove({
            poster_path: detail?.images?.jpg.image_url,
            mal_id: detail?.mal_id,
            score: detail?.score,
            title: detail?.title,
            media_type: "anime",
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

      {detail ? <Title value={`${detail.title}`} /> : null}


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

      <div className="flex items-start md:flex-row flex-col">
        {!isMobile && <MiniSidebar />}
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSidebarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}

        <div className="flex-grow">
          <div className="flex gap-10 mx-6 flex-col md:flex-row">
            <div className="mt-4 w-[250px] h-[350px]">
              <LazyLoadImage
                src={`${detail?.images?.jpg?.image_url}`}
                alt="Poster"
                className="h-full w-full "
                effect="blur"
              />
            </div>

            <div className="mt-8 md:mt-4">
              <div>
                <h1 className="text-2xl  mb-4"> {detail?.title} </h1>
                <div className="flex gap-3 items-center">
                  {!isMobile && (
                    <Link
                      to=""
                      className="flex gap-6 items-center pl-6 pr-12 py-3 rounded-full bg-primary text-white hover:bg-red-800 transition duration-300 mt-4 mb-4 "
                    >
                      <BsPlay size={25} />
                      <span className="text-lg font-medium">WATCH</span>
                    </Link>
                  )}

                  {isMobile && (
                    <Link
                      to=""
                      className="flex gap-6 items-center pl-6 pr-12 py-3 rounded-full bg-primary text-white hover:bg-red-800 transition duration-300 mt-4 mb-4 "
                    >
                      <BsPlay size={25} />
                      <span className="text-lg font-medium">WATCH</span>
                    </Link>
                  )}

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
                    </>
                  )}
                </div>
              </div>
              <AnimeTabInfo detail={detail} characters={characters} />
            </div>
          </div>
        </div>

        <div className="shrink-0 md:max-w-[350px] w-full relative px-6">
          {!isMobile && <AnimeSearchBox />}
          <AnimeRightBarFilms
                name="Similar"
                className="md:mt-20 mt-12"
                isLoading={!recommendations}
                animes={recommendations?.filter((item : any) => item.id !== detail?.mal_id)}
                limit={4}
             />
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;
