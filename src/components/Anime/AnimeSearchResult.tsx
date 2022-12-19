import { AppContext, AppProvider, useGlobalState } from "../../context";
import AnimeItem from "../Common/AnimeItem";

interface AnimeSearchResultsProps {
  page: number;
}

const AnimeSearchResult = ({}) => {
   
  const animes = useGlobalState()




   console.log(animes)


   if(!animes) return <div>No animes</div>
  return (
    <AppProvider>
      <div>
      { animes.map((anime , index) =>  (
         <AnimeItem item={anime}/>
      ))}
      </div>
        
    </AppProvider>
  );
};

export default AnimeSearchResult;
