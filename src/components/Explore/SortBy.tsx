import { FunctionComponent, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { useCurrentSeaarchParams } from "../hooks/useCurrentSearchParams";
import {useCurrentViewPort} from '../hooks/useCurrentViewPort'

interface SortByProps {}

const SortBy: FunctionComponent<SortByProps> = () => {
  const [openSort, setOpenSort] = useState(false);
  const [parent] = useAutoAnimate();
  const { isMobile} = useCurrentViewPort()

  const [searchParams, setSearchParams] = useSearchParams();

  const options = [
    { value: "popularity.desc", label: "Most popular" },
    { value: "vote_average.desc", label: "Most rating" },
    { value: "release_date.desc", label: "Most recent" },
  ];

  return (
    <div className="px-4 pt-3 bg-dark-lighten rounded-md">
      <div className="flex justify-between items-center pb-4">
        <p className="text-lg"> Sort</p>
        <button onClick={() => setOpenSort( ( prevState) => !prevState)}>
          {openSort && <FiChevronDown size={20} />}
          {!openSort && <FiChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
};

export default SortBy;
