import { FC, useContext, useState } from "react";
import { AiOutlineHome, AiOutlineHistory, AiOutlineStar } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBookmarkHeart, BsCameraVideo } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";
import { BsFillEyeFill } from "react-icons/bs";
import { RiSlideshow4Line } from "react-icons/ri";
import { FiAnchor } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useAppSelector } from "../../store/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../../shared/firebase";
import { toast, ToastContainer } from "react-toastify";
import { setCurrentUser } from "../../store/slice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../shared/firebase";
import { AppContext } from "../../context";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: any;
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { isMobile } = useCurrentViewPort();
  const currentUser = useAppSelector((state) => state.user.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  const { setIsSignedIn } = useContext(AppContext);

  const dispatch = useAppDispatch();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        toast.success(" Successfully Signed out", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: true,
          hideProgressBar: false,
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  };

  const privateUrlhandler = (destinationurl: string) => {
    if (!currentUser) {
      toast.info(" You need to sign in to access this route", {
        autoClose: 3000,
        draggable: true,
        pauseOnHover: true,
        closeOnClick: true,
        hideProgressBar: false,
        position: "top-right",
      });
      return;
    }
    navigate(destinationurl);
  };

  const guestLoginHandler = () => {
    const guestUser = {
      email: "guest",
      emailVerified: true,
      uid: "wnVa6slGemYdwxCXs7ph7wkSpZw2",
    };

    onSnapshot(doc(db, "users", guestUser.uid), (doc) => {
      console.log(doc?.data());

      dispatch(
        setCurrentUser({
          email: guestUser.email,
          displayName: doc.data()?.displayName,
          emailVerified: guestUser.emailVerified,
          photoURL: doc.data()?.photoUrl,
          uid: guestUser.uid,
        })
      );
      setIsSignedIn(true);
      localStorage.setItem("isSignedIn", "1");
    });

    toast.success("Successfully Signed in as guest Account", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <ToastContainer />

      <div
        className={`shrink-0 h-full md:max-w-[260px] w-[70vw] bg-gray-800  fixed  -translate-x-full transition duration-300 ${
          isSidebarOpen && "translate-x-0"
        } top-0 shadow-md md:sticky md:translate-x-0 md:bg-transparent md:shadow-none   z-50 `}
      >
        {!isMobile && (
          <Link
            to="/"
            className="flex items-center justify-center mt-4 mb-3 border-black"
          >
            <BsFillEyeFill size={15} className="mr-1 " />
            <h1 className="text-lg uppercase text-white font-medium">
              <span>Stream</span>
            </h1>
          </Link>
        )}
        <div className="md:hidden absolute top-2 right-4 text-red-dark hover:text-red-400 bg-transparent transition ">
          <button onClick={closeSideBar}>
            <FaTimes size={25} />
          </button>
        </div>
        {/* "flex gap-3 items-center hover:text-gray-700 transition duration-300" */}
        <div className="flex flex-col gap-4 mt-4 ml-3 px-4">
          <Link
            to="/"
            className={`flex gap-6 items-center  ${
              location.pathname === "/" &&
              !isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <AiOutlineHome size={25} />
            <p>Home</p>
          </Link>

          <Link
            to="/explore"
            className="flex gap-4 items-center hover:text-gray-700 transition duration-300"
          >
            <MdOutlineExplore size={25} />
            <p className="pl-1">Discover</p>
          </Link>

          <Link
            to="/search"
            className={`flex gap-6 items-center  ${
              location.pathname === "/search" &&
              isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <BiSearch size={25} />
            <p>Search</p>
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-4 ml-4 px-4">
          <button
            onClick={() => privateUrlhandler("/bookmarks")}
            className={`flex gap-6 items-center  ${
              location.pathname === "/bookmarks" &&
              !isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <BsBookmarkHeart size={25} />
            <p>Bookmarked</p>
          </button>

          <button
            onClick={() => privateUrlhandler("/recent")}
            className={`flex gap-6 items-center  ${
              location.pathname === "/recent" &&
              !isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <AiOutlineHistory size={25} />
            <p>Recent</p>
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-4 ml-4 px-4">
          <Link
            to="/tv"
            className={`flex gap-6 items-center  ${
              location.pathname === "/tv" &&
              !isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <RiSlideshow4Line size={25} />
            <p>Tv Shows</p>
          </Link>

          <Link
            to="/movies"
            className={`flex gap-6 items-center  ${
              location.pathname === "/movies" &&
              !isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <BsCameraVideo size={25} />
            <p>Movies</p>
          </Link>

          <Link
            to="/anime"
            className={`flex gap-6 items-center  ${
              location.pathname === "/anime" &&
              !isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <FiAnchor size={25} />
            <p>Anime</p>
          </Link>

          <Link
            to="/animesearch"
            className={`flex gap-6 items-center  ${
              location.pathname === "/animesearch" &&
              !isMobile &&
              "!text-primary border-r-4 border-primary font-medium"
            } hover:text-white transition duration-300`}
          >
            <FiAnchor size={25} />
            <p>Anime Search</p>
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-4 ml-4 px-4">
          <button
            onClick={() => privateUrlhandler("/profile")}
            className="flex gap-4 items-center "
          >
            <BiUserCircle size={25} />
            <p> Profile </p>
          </button>

          {!currentUser && (
            <button
              className="flex gap-4 items-center "
              onClick={guestLoginHandler}
            >
              <HiOutlineLogin size={25} />
              <p>Demo Login</p>
            </button>
          )}

          {currentUser ? (
            <button
              onClick={signOutHandler}
              className="flex gap-4 items-center "
            >
              <HiOutlineLogin size={25} />
              <p> Logout</p>
            </button>
          ) : (
            <Link
              to={`/auth?redirect=${encodeURIComponent(location.pathname)}`}
              className="flex gap-3 items-center "
            >
              <HiOutlineLogin size={25} />
              <p> Login</p>
            </Link>
          )}

          <button></button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
