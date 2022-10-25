import { FC } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCcDiscover } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";

interface SidebarProps {
  isSidebarOpen : boolean,
  setIsSidebarOpen : any 
}

const Sidebar: FC<SidebarProps> = ( { isSidebarOpen , setIsSidebarOpen } ) => {
  const { isMobile } = useCurrentViewPort();
  return (
    <>
      <div className="ml-4 h-screen w-[20vw] border-black">
        {!isMobile && (
          <Link to="/">
            <h1 className="text-xl  font-semibold  uppercase text-black">
              <span>Anime</span>
              <span>Stream</span>
            </h1>
          </Link>
        )}

        <div className="text-black text-lg font- mt-10">MENU</div>
        <div className="flex flex-col gap-6 mt-2 ml-4">
          <Link
            to="/"
            className="flex gap-2 items-center hover:text-gray-700 transition duration-300"
          >
            <AiOutlineHome size={25} />
            <p>Home</p>
          </Link>

          <Link
            to="/discover"
            className="flex gap-2 items-center hover:text-gray-700 transition duration-300"
          >
            <MdOutlineExplore size={25} />
            <p>Discover</p>
          </Link>

          <Link
            to="/search"
            className="flex gap-2 items-center hover:text-gray-700 transition duration-300"
          >
            <BiSearch size={25} />
            <p>Search</p>
          </Link>
        </div>

        <div className="text-black text-lg font-medium mt-6">LIBRARY</div>
        <div className="flex flex-col gap-6 mt-8 ml-4">
          <button className="flex gap-2 items-center hover:text-gray-700 transition duration-300">
            <BsBookmarkHeart size={25} />
            <p>Bookmarked</p>
          </button>
        </div>

        <div className="text-black text-lg font-medium mt-6">GENERAL</div>
        <div className="mt-6 ml-2 flex flex-col gap-6">
          <button className="flex gap-2 items-center ">
            <BiUserCircle size={25} />
            <p> Profile </p>
          </button>

          <button className="flex gap-2 items-center ">
            <HiOutlineLogin size={25} />
            <p>Demo Login</p>
          </button>

          <button className="flex gap-2 items-center ">
            <HiOutlineLogin size={25} />
            <p> Login</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
