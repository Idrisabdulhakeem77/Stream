import { useState, FC } from "react";
import Title from "../components/common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/common/Sidebar";

const Home: FC = () => {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
  return (
    <>
    
      <Title value="Anime Stream" />

      {/* <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest"> AnimeStream </div>
        </Link>
        <button onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

       <div>
         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
       </div> */}
       <div className="flex justify-between ">

       <div>Left</div>
       <div className="flex-"> Main </div>
       <div>Right</div>
      </div> 
    </>
  );
};

export default Home;
