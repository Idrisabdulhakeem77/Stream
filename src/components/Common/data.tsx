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
    url: "/discover",
    icon: <MdOutlineExplore size={25} />,
  },

  {
    name: "search",
    url: "/search",
    icon: <BiSearch size={25} />,
  },
  {
    name: "bookmarked",
    url: "/bookmarked",
    icon: <BsBookmarkHeart size={25} />,
  },
  {
    name: "recent",
    url: "/recent",
    icon: <AiOutlineHistory size={25} />,
  },
  {
    name: "Top rated",
    url: "/top_rated",
    icon: <AiOutlineStar size={25} />,
  },
  {
    name: "tv_shows",
    url: "/tv_shows",
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
    name: "profile",
    url: "/profile",
    icon: <BiUserCircle size={25} />,
  },
  {
    name: "demo_login",
    url: "/demo_login",
    icon: <HiOutlineLogin size={25} />,
  },

  {
    name: "login",
    url: "/login",
    icon: <HiOutlineLogin size={25} />,
  },
];
