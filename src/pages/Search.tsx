import { FunctionComponent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Title from "../components/Common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import Sidebar from "../components/Common/Sidebar";
import SearchBox from "../components/Common/SearchBox";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import  Footer from '../components/Common/Footer'
import { LazyLoadImage } from "react-lazy-load-image-component";

interface SearchProps {}

const Search: FunctionComponent<SearchProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { isMobile } = useCurrentViewPort();
  const [parent] = useAutoAnimate();
  const [openSearchFilter, setOpenSearchFilter] = useState(true);
  const [currentTab, setCurrentTab] = useState("All");

  const query = searchParams.get("query");
  return (
    <>
      {!query ? <Title value="Search | Stream" /> : null}
      {query ? <Title value={`Search | ${query} | Steam`} /> : null}

      <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest ">
            AnimeStream
          </div>
        </Link>
        <button onClick={() => setIsSidebarActive((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

      <div className="flex">
        <Sidebar
          isSidebarOpen={isSidebarActive}
          setIsSidebarOpen={setIsSidebarActive}
        />

        <div className="flex-grow" id="parent">
          <div className="" id="test">
            <h1 className="text-lg font-medium text-center">
              {" "}
              Find your favourite movies, TV shows, Animes , People and more{" "}
              {/* <SearchBox autoFocus/> */}
            </h1>
           
          </div>
          {!query ? (
             <div className="mt-[50px] flex justify-center">
                <LazyLoadImage
                  src="/Images/ken.png"
                  effect="opacity"
                  className="object-cover max-w-[700px] w-[80vw] rounded-xl"
                 />
             </div>
         ) : null}
         
           {isMobile && query && (
            <div className="shrink-0 md:max-w-[310px] w-full md:pt-32 pt-[104px] px-3">
              <div
                // @ts-ignore
                ref={parent}
                className="bg-dark-lighten rounded-md shadow-md px-4 pt-3"
              >
                <div className="flex justify-between items-center text-white pb-3">
                  <p className="text-lg ">Search Results</p>
                  <button onClick={() => setOpenSearchFilter((prev) => !prev)}>
                    {openSearchFilter && <FiChevronDown size={20} />}
                    {!openSearchFilter && <FiChevronRight size={20} />}
                  </button>
                </div>
                {openSearchFilter && (
                  <div className="md:py-6 py-2 border-t border-dark-darken text-white text-lg flex md:flex-col flex-row gap-3">
                    <button
                      onClick={() => {
                        setSearchParams({ query: query || "", page: "1" });
                        setCurrentTab("All");
                      }}
                      className={`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                        currentTab === "All" && "bg-dark-lighten-2"
                      }`}
                    >
                      <span>All</span>
                    </button>
                    <button
                      onClick={() => {
                        setSearchParams({ query: query || "", page: "1" });
                        setCurrentTab("movie");
                      }}
                      className={`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                        currentTab === "movie" && "bg-dark-lighten-2"
                      }`}
                    >
                      <span>Movie</span>
                    </button>
                    <button
                      onClick={() => {
                        setSearchParams({ query: query || "", page: "1" });
                        setCurrentTab("tv");
                      }}
                      className={`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                        currentTab === "tv" && "bg-dark-lighten-2"
                      }`}
                    >
                      <span>TV</span>
                    </button>
                    <button
                      onClick={() => {
                        setSearchParams({ query: query || "", page: "1" });
                        setCurrentTab("person");
                      }}
                      className={`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                        currentTab === "person" && "bg-dark-lighten-2"
                      }`}
                    >
                      <span>People</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* {query && (
            <SearchResult
              currentTab={currentTab}
              query={query}
              page={Number(page)}
            />
          )} */}
          
        </div>

         

        {!isMobile && (
          <div className="shrink-0 md:max-w-[310px] w-full pt-4 px-3">
            <div
              // @ts-ignore
              ref={parent}
              className="bg-dark-lighten rounded-sm px-3 py-4"
            >
              <div className="flex justify-between items-center pb-3">
                <p className="text-lg"> Search Results </p>
                <button
                  onClick={() => setOpenSearchFilter((prevState) => !prevState)}
                >
                  {openSearchFilter ? (
                    <FiChevronDown size={20} />
                  ) : (
                    <FiChevronRight size={20} />
                  )}
                </button>
              </div>

              {openSearchFilter && (
                <div className="md:py-6 py-2 border-t border-dark-darken text-white text-lg flex md:flex-col flex-row gap-3">
                  <button
                    onClick={() => {
                      setSearchParams({ query: query || "", page: "1" });
                      setCurrentTab("All");
                    }}

                   className = {`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                      currentTab === "All" && "bg-dark-lighten-2"
                    }`}
                  >
                    <span> All</span>
                  </button>
                  <button
                    onClick={() => {
                      setSearchParams({ query: query || "", page: "1" });
                      setCurrentTab("Movie");
                    }}
                    className = {`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                      currentTab === "Movie" && "bg-dark-lighten-2"
                    }`}
                  >
                    <span> Movies</span>
                  </button>
                  <button
                    onClick={() => {
                      setSearchParams({ query: query || "", page: "1" });
                      setCurrentTab("Tv");
                    }}
                    className = {`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                      currentTab === "Tv" && "bg-dark-lighten-2"
                    }`}
                  >
                    <span> Tv</span>
                  </button>
                  <button
                    onClick={() => {
                      setSearchParams({ query: query || "", page: "1" });
                      setCurrentTab("Animes");
                    }}
                    className = {`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                      currentTab === "Animes" && "bg-dark-lighten-2"
                    }`}
                  >
                    <span> Animes</span>
                  </button>
                  <button
                    onClick={() => {
                      setSearchParams({ query: query || "", page: "1" });
                      setCurrentTab("People");
                    }}
                    className = {`w-full hover:bg-dark-lighten-2  py-1 rounded-md transition duration-300 ${
                      currentTab === "People" && "bg-dark-lighten-2"
                    }`}
                  >
                    <span> People</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer/>
    </>
  );
};

export default Search;
