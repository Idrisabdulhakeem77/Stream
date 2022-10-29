import { useState, FC } from "react";
import Title from "../components/Common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Common/Sidebar";
import SearchBox from "../components/Common/SearchBox";
import User from "../components/Common/User";
import BannerSlider from "../components/Slider/BannerSlider";



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

        <div className="flex-grow  pt-0 pb-7 border-x md:px-[2vw] px-[4vw] md:border-dark min-h-screen">
          <div className="flex justify-between items-center md:items-start">
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
           <div className="flex items-center md:hidden gap-4" > 
               <p> Unknown</p>
               {/* <img src="" alt="user" className="w-7 h-7 rounded-full object-cover" /> */}
            </div>

            <BannerSlider/>
              
          </div>
        </div>


        <div className="shrink-0 max-w-[300px] w-full hidden lg:block px-6 top-0 sticky ">
            <User/>
             <SearchBox />
         </div>
      </div>
       
    </>
  );
};

export default Home;
