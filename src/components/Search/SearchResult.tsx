import { FunctionComponent } from "react";


interface SearchResultsProps {
     currentTab : string, 
     page : number ,
     query : string
}

const SearchResults : FunctionComponent<SearchResultsProps> = () => {
      return (
         <div>
             Search
         </div>
      )
}

export default SearchResults