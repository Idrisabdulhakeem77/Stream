import { FunctionComponent } from "react";


interface SearchResultsProps {
     currentTab : string, 
     page : number ,
     query : string
}

const SearchResults : FunctionComponent<SearchResultsProps> = ({ currentTab , page , query}) => {
      return (
         <div>
             Search
         </div>
      )
}

export default SearchResults