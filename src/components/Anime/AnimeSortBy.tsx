import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import Select from "react-select";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import {  useAnimeCurrentSeaarchParams } from "../hooks/useCurrentSearchParams";


interface AnimeSortByProps {}

const AnimeSortBy = () => {
  const [openSort, setOpenSort] = useState(true);
  const [parent] = useAutoAnimate();

  const [searchParams , setSearchParams] = useSearchParams()

  const options = [
    { value: "asc", label: "Most popular" },
    { value: "desc", label: "Most rating" },
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

 const [animeCurrentSearchParms] = useAnimeCurrentSeaarchParams()

  const  chooseSort =  ( option  : any) => {
     const sortValue = option?.value || ""


     setSearchParams({ 
        ...animeCurrentSearchParms ,
        sort : sortValue
     })

  }

  const sortType = searchParams.get("sort") || "asc"


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
          <Select 
           onChange={chooseSort}
          options={options} defaultValue={options[0]} styles={customStyles}
           value={options.find((option) => option.value === sortType)}
           />
        </div>
      )}
    </div>
  );
};

export default AnimeSortBy;
