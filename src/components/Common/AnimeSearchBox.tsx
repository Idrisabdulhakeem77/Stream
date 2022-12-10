import React, { useState, useRef, FormEvent, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Animes} from '../../shared/types'

interface AnimeSerachBoxProps {
   autoFocus ? :boolean
}

const AnimeSearchBox = ( {autoFocus} : AnimeSerachBoxProps) => {
  const [searchInput, setSearchInput] = useState("");
  const searhValue = useRef<any>("");
  const [searchResult , setSearhResult ] = useState<Animes | any>([])

  const fetchAnime = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
       
       setSearchInput(searhValue.current.value)
      const data = (await axios.get(
        `https://api.jikan.moe/v4/anime?q=${searchInput}`
      )).data;
            
       
       setSearhResult(data)
    },
    [searchInput]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="rounded-full  mt-5 bg-slate-300">
      <form onSubmit={handleSubmit}>
        <button className="absolute translate-x-4 translate-y-4 text-light-gray ">
          <FaSearch size={25} />
        </button>

        <input
          type="text"
          ref={searhValue}
          placeholder="Search..."
          value={searchInput}
          onChange={fetchAnime}
          autoFocus={autoFocus}
          className="w-full pl-14 pr-7 outline-none  bg-transparent placeholder-dark-lighten py-4 text-black "
        />
      </form>
    </div>
  );
};

export default AnimeSearchBox;
