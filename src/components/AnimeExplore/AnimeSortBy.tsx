import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import Select from "react-select";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface AnimeSortByProps {}

const AnimeSortBy = () => {
  const [openSort, setOpenSort] = useState(true);
  const [parent] = useAutoAnimate();

  const options = [
    { value: "popularity.desc", label: "Most popular" },
    { value: "vote_average.desc", label: "Most rating" },
    { value: "release_date.desc", label: "Most recent" },
  ];

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#49494b",
      boxShadow: "none",
      border: 0,
    }),
    option: (styles: any, state: any) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#989898" : "#49494b",
    }),

    singleValue: (provided: any) => {
      return { ...provided, color: "white" };
    },

    menu: (styles: any) => ({
      ...styles,
      backgroundColor: "#49494b",
    }),
  };

  return (
    <div
      //@ts-ignore
      ref={parent}
      className="px-2 pt-4 mt-10 bg-dark-lighten rounded-md"
    >
      <div className="flex justify-between items-center pb-4">
        <p className="text-lg text-white"> Sort</p>
        <button onClick={() => setOpenSort((prevState) => !prevState)}>
          {openSort && <FiChevronDown size={20} />}
          {!openSort && <FiChevronRight size={20} />}
        </button>
      </div>

      {openSort && (
        <div className="py-3 border-t border-dark-darken mb-24 md:mb-0 ">
          <p className="text-lg mb-2 text-white/80">Sort results by </p>
          <Select options={options} defaultValue={options[0]} styles={customStyles} />
        </div>
      )}
    </div>
  );
};

export default AnimeSortBy;
