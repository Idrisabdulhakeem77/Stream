import { FC, useState, useEffect } from "react";
import Title from "../components/Common/Title";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import MiniSidebar from "../components/Common/MiniSidebar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SortBy from "../components/Explore/SortBy";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import Sidebar from "../components/Common/Sidebar";
import SearchBox from "../components/Common/SearchBox";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const [showScrollBtn, setShowStrollBtn] = useState(true);
  const [isSiderBarActive, setIsSidebarActive] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { isMobile } = useCurrentViewPort();
  return (
    <>
      <Title value="Explore" />
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-[30px] right-[30px] z-10 transition duration-500 ${
            showScrollBtn ? "opacity-100" : "opacity-0"
          }`}
        >
          <BsFillArrowUpCircleFill
            size={35}
            className="hover:brightness-75 transition duration-300"
          />
        </button>
      )}

      <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest">
            {" "}
            AnimeStream{" "}
          </div>
        </Link>
        <button onClick={() => setIsSidebarActive((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        {!isMobile && <MiniSidebar />}
        {isMobile && (
          <Sidebar
            isSidebarOpen={isSiderBarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        )}

        <div className="flex-grow px-[2vw] pt-6">
          {!isMobile && (
            <div className="flex flex-col-reverse md:flex-row">
              <h2 className="text-lg font-semibold uppercase">
                {" "}
                Find Movies , Tv Shows or Anime that Interest You{" "}
              </h2>
              <div className="relative max-w-[350px] w-full -mt-20 -mr-7">
                <SearchBox />
              </div>
            </div>
          )}
        </div>
      </div>

      <SortBy />
    </>
  );
};

export default Explore;
