import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface AnimeSerachBoxProps {}

const AnimeSearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <form>
        <button className="absolute top-1/2 -translate-y-1/2 left-5 text-light-gray">
          <FaSearch size={25} className="" />
        </button>

        <input type="text" placeholder="Search..." value={searchInput}  onChange={(e) => setSearchInput(e.target.value)}/>
      </form>
    </div>
  );
};

export default AnimeSearchBox;
