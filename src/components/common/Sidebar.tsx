import { FC } from "react";
import { AiOutlineHome, AiOutlineHistory, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCcDiscover } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import { BsFillEyeFill } from "react-icons/bs";
import { RiSlideshow3Fill } from "react-icons/ri";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: any;
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { isMobile } = useCurrentViewPort();
  return (
    <>
      <div className="h-screen w-[70vw] md:max-w-[250px]" id="main-div">
        {!isMobile && (
          <Link
            to="/"
            className="flex  items-center justify-center mt-4 mb-3 border-black font-semibold"
          >
            <BsFillEyeFill size={20} className="mr-1 " />
            <h1 className="text-xl    uppercase text-black">
              <span>Anime</span>
              <span>Stream</span>
            </h1>
          </Link>
        )}

        <div className="text-black text-lg text-center">MENU</div>
        <div className="flex flex-col gap-4 mt-4 ml-4 px-4">
          <Link
            to="/"
            className="flex gap-1 items-center hover:text-gray-700 transition duration-300"
          >
            <AiOutlineHome size={25} />
            <p>Home</p>
          </Link>

          <Link
            to="/discover"
            className="flex gap-1 items-center hover:text-gray-700 transition duration-300"
          >
            <MdOutlineExplore size={25} />
            <p>Discover</p>
          </Link>

          <Link
            to="/search"
            className="flex gap-1 items-center hover:text-gray-700 transition duration-300"
          >
            <BiSearch size={25} />
            <p>Search</p>
          </Link>
        </div>

        <div className="text-black text-lg text-center mt-2">LIBRARY</div>
        <div className="flex flex-col gap-4 mt-4 ml-4 px-4">
          <button className="flex gap-1 items-center hover:text-gray-700 transition duration-300">
            <BsBookmarkHeart size={25} />
            <p>Bookmarked</p>
          </button>

          <button className="flex gap-1 items-center hover:text-gray-700 transition duration-300">
            <AiOutlineHistory size={25} />
            <p>Recent</p>
          </button>

          <button className="flex gap-1 items-center hover:text-gray-700 transition duration-300">
            <AiFillStar size={25} />
            <p>Top Rated</p>
          </button>
        </div>

        <div className="text-black text-lg font-medium mt-4 text-center">
          Categories
        </div>
        <div className="flex flex-col gap-4 mt-4 ml-4 px-4">
          {/* <button>
             <RiSlideshow3Fill size={25}/>
             <p>Tv Shows</p>
           </button> */}

          <button className="flex gap-1 items-center hover:text-gray-700 transition duration-300">
            <AiFillStar size={25} />
            <p>Top Rated</p>
          </button>
        </div>

        {/* <div className="text-black ttext-lg font-medium mt-6">GENERAL</div> */}
        <div className="flex flex-col gap-4 mt-4 ml-4">
          <button className="flex gap-1 items-center ">
            <BiUserCircle size={25} />
            <p> Profile </p>
          </button>

          <button className="flex gap-1 items-center ">
            <HiOutlineLogin size={25} />
            <p>Demo Login</p>
          </button>

          <button className="flex gap-1 items-center ">
            <HiOutlineLogin size={25} />
            <p> Login</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
