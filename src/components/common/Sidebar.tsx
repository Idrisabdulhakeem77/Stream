import { FC } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCcDiscover } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-xl text-red-600  font-semibold  uppercase">
          <span>Anime</span>
          <span className="text-black">Stream</span>
        </h1>
      </Link>

      <div className="text-black text-lg font-medium mt-10">MENU</div>
      <div>
        <Link to="/">
          <AiOutlineHome size={30} />
          <p>Home</p>
        </Link>

        <Link to="/discover">
          <MdOutlineExplore size={30} />
          <p>Discover</p>
        </Link>

        <Link to="/search">
          <BiSearch size={30} />
          <p>Search</p>
        </Link>
      </div>

      <div className="text-black text-lg font-medium mt-10">LIBRARY</div>
      <div>
      <button>
         
      </button>
      </div>
    </div>
  );
};

export default Sidebar;
