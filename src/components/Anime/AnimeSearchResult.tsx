import { SearchContext, SearchProvider, useGlobalContext } from "../../context";
import AnimeItem from "../Common/AnimeItem";

interface AnimeSearchResultsProps {
  page: number;
}

const AnimeSearchResult = ({}) => {
   
  const animes = useGlobalContext()




   console.log(animes)


   if(!animes) return <div>No animes</div>
  return (
    <SearchProvider>
      <div>
      {/* { animes.map((anime , index) =>  (
         <AnimeItem item={anime}/>
      ))} */}
      </div>
        
    </SearchProvider>
  );
};

export default AnimeSearchResult;
