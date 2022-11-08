import { FunctionComponent, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { useCurrentSeaarchParams } from "../hooks/useCurrentSearchParams";
import {useCurrentViewPort} from '../hooks/useCurrentViewPort'
import Select  from 'react-select'
interface SortByProps {}

const SortBy: FunctionComponent<SortByProps> = () => {
  const [openSort, setOpenSort] = useState(true);
  const [parent] = useAutoAnimate();
  const { isMobile} = useCurrentViewPort()

  const [searchParams, setSearchParams] = useSearchParams();

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
    option: (
      styles: any,
      { data, isDisabled, isFocused, isSelected }: any
    ) => ({
      ...styles,
      backgroundColor: isSelected ? "#989898" : "#49494b",
    }),

    singleValue: (provided: any) => {
      return { ...provided, color: "white" };
    },

    menu: (styles: any) => ({
      ...styles,
      backgroundColor: "#49494b",
    }),
  };

  const [currentSearchParams] = useCurrentSeaarchParams();

  const chooseSort = (option: any) => {
    const sortValue = option?.value || "";

    setSearchParams({
      ...currentSearchParams,
      sort_by: sortValue,
    });
  };

  

  return (
    <div className="px-4 pt-3 bg-dark-lighten rounded-md">
      <div className="flex justify-between items-center pb-4">
        <p className="text-lg"> Sort</p>
        <button onClick={() => setOpenSort( ( prevState) => !prevState)}>
          {openSort && <FiChevronDown size={20} />}
          {!openSort && <FiChevronRight size={20} />}
        </button>
      </div>
      {openSort && (
        <div className="py-3 border-t border-dark-darken">
          <p className="text-lg mb-2 text-white/80">Sort results by </p>
          <Select
          styles={customStyles}
            options={options}
            defaultValue={options[0]}
            onChange={chooseSort}
      
          />
        </div>
      )}
    </div>
  );
};

export default SortBy;
