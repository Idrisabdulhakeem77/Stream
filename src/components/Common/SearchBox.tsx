import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="absolute rounded-full z-20 top-6 left-7 right-6 bg-dark-lighten ">
      <form className="relative">
        <button className="absolute top-1/2 -translate-y-1/2 left-5 text-white">
          <FaSearch  size={25} className=""/>
        </button>

        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        className="w-full pl-14 pr-7 outline-none  bg-transparent placeholder-white py-4 text-white"
        />
      </form>
    </div>
  );
};

export default SearchBox;
