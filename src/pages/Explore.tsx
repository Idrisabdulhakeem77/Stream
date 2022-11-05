import { FC, useState, useEffect } from "react";
import Title from "../components/Common/Title";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import MiniSidebar from "../components/Common/MiniSidebar";
import SortBy from "../components/Explore/SortBy";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const [showScrollBtn, setShowStrollBtn] = useState(true);
  const scrollTo = () => {
    console.log("scrolling");
  };
  return (
    <>
      <Title value="Explore" />
      {showScrollBtn && (
        <button
          onClick={scrollTo}
          className={`fixed bottom-[30px] right-[30px] z-10 transition duration-500 ${
            showScrollBtn ? "opacity-100" : "opacity-0"
          }`}
        >
          <BsFillArrowUpCircleFill
            size={35}
            className="hover:brightness-75 transition duration-300"
          />
        </button>
      )}

      <SortBy />
    </>
  );
};

export default Explore;
