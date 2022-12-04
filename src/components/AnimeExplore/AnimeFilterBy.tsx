import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface AnimeFilterByProps {}

const AnimeFilterBy = () => {
  const [parent] = useAutoAnimate();
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div
      //@ts-ignore
      ref={parent}
      className="px-2 pt-4 mt-10 bg-dark-lighten rounded-md"
    >
      <div className="flex justify-between item-center pb-4">
        <p className="text-lg text-white"> Filter</p>
        <button onClick={() => setOpenFilter((prevState) => !prevState)}>
          {openFilter && <FiChevronDown size={20} />}
          {!openFilter && <FiChevronRight size={20} />}
        </button>
      </div>

      { openFilter && (
          <div className="py-3 border-t border-dark-darken"> 
             <p className="text-lg mb-4 text-white/80"> Genres  </p>
            {/* <FilterByGenre currentTab={currentTab}/> */}

            <p className="text-lg mb-4 mt-4 text-white/80"> Runtime  </p>
            {/* <FilterByRating/> */}

            <p className="text-lg mb-4 mt-4 text-white/80"> Realease Dates  </p>
            {/* <FilterByDate/> */}
            </div>
      )}
    </div>
  );
};

export default AnimeFilterBy;
