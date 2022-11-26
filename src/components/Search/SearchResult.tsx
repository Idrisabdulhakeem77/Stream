import { FunctionComponent } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../../services/search";
import { ItemsPage } from "../../shared/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Pagination from "./Pagination";

interface SearchResultsProps {
  currentTab: string;
  page: number;
  query: string;
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  currentTab,
  page,
  query,
}) => {
  const { data, error, isError, isPreviousData } = useQuery<ItemsPage, Error>(
    ["search-query", currentTab, page, query],
    () => getSearchResult(page, query, currentTab),
    { keepPreviousData: true }
  );

  if (isError) return <div> Error : {error.message} </div>;

  const changePageHandler = (page: number): string => {
    if (isPreviousData) return "";
    return `/search?query=${encodeURIComponent(query)}&page=${page}`;
  };

  return (
    <div>
      <p>
          Search result for '{query }' is ({ data?.total_results} found)
      </p>

      { data && data.results.length === 0  && (
            <div>
                 <LazyLoadImage
                  alt="error"
                   src="/error.fail.jpg"
                    effect="opacity"
                    className="w-[600px]"
                  />
           <p> There is no such film </p>
               </div>
      )}


       { data && <Pagination currentPage={data.page} maxPage={data.total_pages} onPageChange={changePageHandler}/>}
    </div>
  );
};

export default SearchResults;
