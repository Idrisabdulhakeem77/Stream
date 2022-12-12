import { toast, ToastContainer } from "react-toastify";
import Title from "../Common/Title";
import { Animes } from "../../shared/types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MiniSidebar from "../Common/MiniSidebar";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import Sidebar from "../Common/Sidebar";
import AnimeSearchBox from "../Common/AnimeSearchBox";
import AnimeRightBar from "../Common/AnimeRightBarFilms";
import AnimeRightBarFilms from "../Common/AnimeRightBarFilms";

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

  const { isMobile } = useCurrentViewPort();

  return (
    <>
      <ToastContainer />

      {detail ? <Title value={`${detail.title}`} /> : null}

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

      <div  className="flex items-start">
         { !isMobile  && <MiniSidebar />}
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSidebarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}

         <div className="flex-grow"> 

         </div>

         <div className="shrink-0 md:max-w-[310px] w-full relative px-6">
             { !isMobile &&  <AnimeSearchBox/>}
             {/* <AnimeRightBarFilms
                name="Similar"
                className="md:mt-20 mt-12"
                isLoading={!recommendations}
                films={recommendations?.filter((item : any) => item.id !== detail?.mal_id)}
                limit={4}
             /> */}
         </div>
      </div>
    </>
  );
};

export default AnimeDetail;
