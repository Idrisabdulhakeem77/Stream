import React from "react";
import { AiOutlineHome, AiOutlineHistory, AiOutlineStar } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBookmarkHeart, BsCameraVideo } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { RiSlideshow4Line } from "react-icons/ri";
import { FiAnchor } from "react-icons/fi";

export const links = [
  {
    name: "home",
    url: "/",
    icon: <AiOutlineHome size={25} />,
  },

  {
    name: "discover",
    url: "/explore",
    icon: <MdOutlineExplore size={25} />,
  },

  {
    name: "search",
    url: "/search",
    icon: <BiSearch size={25} />,
  },
  {
    name: "bookmarks",
    url: "/bookmarks",
    icon: <BsBookmarkHeart size={25} />,
  },
  {
    name: "recent",
    url: "/recent",
    icon: <AiOutlineHistory size={25} />,
  },
  {
    name: "tv_shows",
    url: "/tv",
    icon: <RiSlideshow4Line size={25} />,
  },
  {
    name: "Movies",
    url: "/movies",
    icon: <BsCameraVideo size={25} />,
  },
  {
    name: "anime",
    url: "/anime",
    icon: <FiAnchor size={25} />,
  },
  {
    name: "animesearch",
    url: "/animesearch",
    icon: <FiAnchor size={25} />,
  },
  {
    name: "profile",
    url: "/profile",
    icon: <BiUserCircle size={25} />,
  },

  {
    name: "auth",
    url: "/auth",
    icon: <HiOutlineLogin size={25} />,
  },
];
