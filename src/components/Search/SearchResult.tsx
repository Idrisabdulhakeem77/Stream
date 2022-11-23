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
     const { data , error , isError } = useQuery<ItemsPage , Error>(["search-query" , currentTab , page , query] , () => getSearchResult( page , query ,currentTab) , { keepPreviousData : true})
      return (
         <div>
             Search
         </div>
      )
}

export default SearchResults