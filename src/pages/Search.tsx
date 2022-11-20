import { FunctionComponent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Title from "../components/Common/Title";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import Sidebar from "../components/Common/Sidebar";
import SearchBox from "../components/Common/SearchBox";

interface SearchProps {}

const Search: FunctionComponent<SearchProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { isMobile } = useCurrentViewPort();

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

        <div className="flex-grow">
          <div className="">
            {/* <SearchBox autoFocus /> */}
          </div>
        </div>

        {!isMobile && (
          <div className="shrink-0 md:max-w-[310px] w-full pt-4 px-3">
            Last Column
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
