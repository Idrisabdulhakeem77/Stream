import Sidebar from "../components/Common/Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import AnimeSearchBox from "../components/Common/AnimeSearchBox";
interface AnimeSearchProps {}

const AnimeSearch = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { isMobile } = useCurrentViewPort();

  return (
    <>
      <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest ">
            AnimeStream
          </div>
        </Link>
        <button onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex-grow">
          <h1 className="text-3xl font-xl text-center mt-2">
            Find your favourite Animes 
          </h1>
          <AnimeSearchBox />
        </div>
      </div>
    </>
  );
};

export default AnimeSearch;
