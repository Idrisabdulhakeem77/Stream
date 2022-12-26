import Sidebar from "../components/Common/Sidebar";
import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import AnimeItem from "../components/Common/AnimeItem";
import { Animes } from "../shared/types";
import { useSearchParams } from "react-router-dom";
import Title from "../components/Common/Title";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AnimeSearch = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [searchInput, setSearchInput] = useState("");
  const [animes, setAnimes] = useState<Animes[]>([]);
  const searchInputValue = useRef<any>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (!searchInput) return;

    setAnimes([]);
    setSearchParams({ q: searchInput });
    const response = (
      await axios.get(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
    ).data;

    const { data } = response;

    setAnimes(data);

    setSearchInput("");

    setLoading(false);
  };

  return (
    <>
      {!query ? <Title value="Anime Search | Stream" /> : null}
      {query ? <Title value={`Search | ${query} | Steam`} /> : null}
      <div className="flex justify-between items-center my-4 px-4 md:hidden ">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest ">
            Stream
          </div>
        </Link>
        <button onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex ">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex-grow w-full">
          <h1 className="text-3xl font-xl text-center mt-2">
            Find your favourite Animes
          </h1>

          {/* Starting of Anime Search Component */}
          <div className="rounded-full  mt-5 bg-gray-800 ">
            <form onSubmit={handleSubmit}>
              <button className="absolute translate-x-4 translate-y-4 text-light-white ">
                <FaSearch size={25} />
              </button>

              <input
                type="text"
                ref={searchInputValue}
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                // autoFocus={autoFocus}
                className="w-full pl-14 pr-7 outline-none  bg-transparent placeholder-white py-4 text-white "
              />
            </form>
          </div>

          {/* Ending of the components */}

          {loading && (
            <div className="mt-20 mb-20 mx-auto h-10 w-10 rounded-full border-[5px] border-dark-darken border-t-transparent animate-spin"></div>
          )}

          <ul className="grid  gap-x-8 gap-y-10 pt-2 grid-cols-sm lg:grid-cols-lg">
            {animes &&
              animes.map((anime) => (
                <li key={anime.mal_id}>
                  <AnimeItem item={anime} />
                </li>
              ))}
          </ul>

          {!query ? (
            <div className="mt-4 flex justify-center">
              <LazyLoadImage
                src="/Images/ken.png"
                effect="opacity"
                className="object-cover  w-[80vw] h-[80%] rounded-xl"
              />
            </div>
          ) : null}

          {animes && !loading && query && animes.length === 0 && (
            <div className=" flex flex-col tw-flex-center mt-40 text-center text-lg ">
              {" "}
              <span className=" text-primary text-[300px]"> 404</span>
              <span className="mt-32 text-[50px] font-light">
                {" "}
                Anime not found{" "}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimeSearch;
