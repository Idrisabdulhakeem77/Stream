import React, { useState, useRef, FormEvent, useContext } from "react";
import { FaSearch } from "react-icons/fa";
// import { AppContext, AppProvider   } from "../../context";

interface AnimeSerachBoxProps {
  autoFocus?: boolean;
}

const AnimeSearchBox = ({ autoFocus }: AnimeSerachBoxProps) => {
  const [searchInput, setSearchInput] = useState("");
  const searhValue = useRef<any>("");

  const handleChange = () => {
    console.log(":is vhnging");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="rounded-full  mt-5 bg-gray-800 ">
      <form onSubmit={handleSubmit}>
        <button className="absolute translate-x-4 translate-y-4 text-light-white ">
          <FaSearch size={25} />
        </button>

        <input
          type="text"
          ref={searhValue}
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          autoFocus={autoFocus}
          className="w-full pl-14 pr-7 outline-none  bg-transparent placeholder-white py-4 text-white "
        />
      </form>
    </div>
  );
};

export default AnimeSearchBox;
