import { FC } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCcDiscover } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import {useCurrentViewPort} from "../hooks/useCurrentViewPort"

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const {width} = useCurrentViewPort()
  return (
    <>
     
     {console.log(width)}
    <div>
      <Link to="/">
        <h1 className="text-xl text-red-600  font-semibold  uppercase">
          <span>Anime</span>
          <span className="text-black">Stream</span>
        </h1>
      </Link>

      <div className="text-black text-lg font-medium mt-10">MENU</div>
      <div className="flex flex-col gap-6 mt-8 ml-8">
        <Link to="/" className="flex gap-4 items-center hover:text-gray-700 transition duration-300">
          <AiOutlineHome size={30} />
          <p>Home</p>
        </Link>

        <Link to="/discover" className="flex gap-4 items-center hover:text-gray-700 transition duration-300">
          <MdOutlineExplore size={30} />
          <p>Discover</p>
        </Link>

        <Link to="/search" className="flex gap-4 items-center hover:text-gray-700 transition duration-300">
          <BiSearch size={30} />
          <p>Search</p>
        </Link>
      </div>

      <div className="text-black text-lg font-medium mt-10">LIBRARY</div>
      <div className="flex flex-col gap-6 mt-8 ml-8">
        <button className="flex gap-4 items-center hover:text-gray-700 transition duration-300">
          <BsBookmarkHeart size={25} />
          <p>Bookmarked</p>
        </button>
      </div>

      <div className="text-black text-lg font-medium mt-10">GENERAL</div>
      <div className="mt-8 ml-4 flex flex-col gap-6">
      <button className="flex gap-6 items-center "  >
        <BiUserCircle size={25} />
        <p> Profile </p>
      </button>

      <button className="flex gap-6 items-center " > 
        <HiOutlineLogin size={25} />
        <p>Demo Login</p>
      </button>

      <button className="flex gap-6 items-center " > 
        <HiOutlineLogin size={25} />
        <p> Login</p>
      </button>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
