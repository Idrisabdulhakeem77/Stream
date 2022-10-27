import { useState, FC } from "react";
import Title from "../components/common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/common/Sidebar";

const Home: FC = () => {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
    const [currentTab , setCurrentTab] = useState(localStorage.getItem("CurrentTab"))
  return (
    <>
    
      <Title value="Anime Stream" />

        <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest"> AnimeStream </div>
        </Link>
        <button onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

       <div className="flex items-start"> 
         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          
          <div>
            <div className="inline-flex  gap-[40px]  relative pb-4 border-b border-dark">
               <button onClick={() => {setCurrentTab("movie") ; localStorage.setItem("currentTab" , "movie") }}>Movie</button>
              <button onClick={() => {setCurrentTab("tv") ; localStorage.setItem("currentTab" , "tv") }}>Tv Shows</button>
              <button onClick={() => {setCurrentTab("anime") ; localStorage.setItem("currentTab" , "anime") }}>Anime</button>
             </div>
          </div>
       </div> 
    </>
  );
};

export default Home;
