import { FunctionComponent } from "react";
import { Link ,  useLocation } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import { links } from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";

// ADD REACT TOASTIFY LIBRARY

const MiniSidebar: FunctionComponent = () => { 
   const location = useLocation()
  return (
    <div className="shrink-0 py-8 max-w-[80px] flex flex-col items-center justify-between h-screen sticky top-0">
      <Link to="/">
        <BsFillEyeFill size={25} />
      </Link>
      <div className="flex flex-col gap-3">
        {(links as []).map((link, index) => {
          const { url, icon } = link;
          return (
            <Link key={index} to={url} className={` ${location.pathname === url  &&
              "!text-primary  font-medium"}`}>
              {icon}
            </Link>
          );
        })}
      </div>
      <button>
        <LazyLoadImage
          src="/Images/user.svg"
          alt="user"
          effect="blur"
          className="w-10 h-10 rounded-full"
        />
      </button>
    </div>
  );
};

export default MiniSidebar;
