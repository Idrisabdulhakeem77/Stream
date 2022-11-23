import { FunctionComponent } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../../services/search"
import { ItemsPage } from "../../shared/types";


interface SearchResultsProps {
     currentTab : string, 
     page : number ,
     query : string
}

const SearchResults : FunctionComponent<SearchResultsProps> = ({ currentTab , page , query}) => {
     const { data , error , isError ,isPreviousData } = useQuery<ItemsPage , Error>(["search-query" , currentTab , page , query] , () => getSearchResult( page , query ,currentTab) , { keepPreviousData : true})

     if(isError) return <div> Error : {error.message} </div>

     const changePageHandler = (page: number): string => {
          if (isPreviousData) return "";
          return `/search?query=${encodeURIComponent(query)}&page=${page}`;
        };

      return (
         <div>
             Search
         </div>
      )
}

export default SearchResults