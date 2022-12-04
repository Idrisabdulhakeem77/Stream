import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import {FiChevronDown , FiChevronRight} from 'react-icons/fi'

interface AnimeFilterByProps {}

const AnimeFilterBy = () => {
  const [parent] = useAutoAnimate();
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div
      //@ts-inore
      className="px-2 pt-4 mt-10 bg-dark-lighten rounded-md"
    >
      <div>
        <button onClick={() => setOpenFilter((prevState) => !prevState)}>
          {openFilter && <FiChevronDown size={20} />}
          {!openFilter && <FiChevronRight size={20} />}
        </button>
      </div>
      <p>Filter</p>
    </div>
  );
};

export default AnimeFilterBy;
