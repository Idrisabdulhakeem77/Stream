import React, { useState, useRef, FormEvent, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Animes } from "../../shared/types";

interface AnimeSerachBoxProps {
  autoFocus?: boolean;
}

const AnimeSearchBox = ({ autoFocus }: AnimeSerachBoxProps) => {
  const [searchInput, setSearchInput] = useState("");
  const searhValue = useRef<any>("");
  const [searchResult, setSearhResult] = useState<Animes | any>([]);

  const fetchAnime = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      setSearchInput(searhValue.current.value);

      // setSearhResult(data);
    },
    [searchInput]
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSearchInput(searhValue.current.value);

    const response = (
      await axios.get(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
    ).data;

    const { data } = response;

    setSearhResult(data);

    setSearchInput("");
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
          autoFocus={autoFocus}
          className="w-full pl-14 pr-7 outline-none  bg-transparent placeholder-white py-4 text-white "
        />
      </form>
    </div>
  );
};

export default AnimeSearchBox;
