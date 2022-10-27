import { useState, FC } from "react";
import Title from "../components/common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/common/Sidebar";

const Home: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(localStorage.getItem("currentTab"));
  return (
    <>
      <Title value="Anime Stream" />

      <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest">
            {" "}
            AnimeStream{" "}
          </div>
        </Link>
        <button onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex items-start">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div>
          <div className="inline-flex  gap-[40px]  relative pb-3  mt-2 md:mt-4 px-4 text-gray-600 ">
            <button
              onClick={() => {
                setCurrentTab("movie");
                localStorage.setItem("currentTab", "movie");
              }}
              className={`${
                currentTab === "movie" &&
                "font-medium  transition duration-200 hover:text-black   after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[10%] after:bg-black"
              }`}
            >
              Movie
            </button>
            <button
              onClick={() => {
                setCurrentTab("tv");
                localStorage.setItem("currentTab", "tv");
              }}
              className={`${
                currentTab === "tv" &&
                "font-medium  transition duration-200 hover:text-black   after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[45%] after:bg-black"
              }`}
            >
              Tv Shows
            </button>
            <button
              onClick={() => {
                setCurrentTab("anime");
                localStorage.setItem("currentTab", "anime");
              }}
              className={`${
                currentTab === "anime" &&
                "font-medium  transition duration-200 hover:text-black   after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[80%] after:bg-black"
              }`}
            >
              Anime
            </button>
          </div>
        </div>
      </div>
      { console.log(currentTab)}
    </>
  );
};

export default Home;
