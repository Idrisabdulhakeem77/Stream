import {useQuery} from "@tanstack/react-query"
import { useParams , useSearchParams } from "react-router-dom"
import {getWatchTV} from '../../services/tv'
import {getWatchReturnedType} from "../../shared/types"
import FilmWatch from '../../components/FilmWatch/FilmWatch'



const TvWatch = () => {
     const {id} = useParams()

    const { data  , isError} = useQuery<getWatchReturnedType , Error>(["watch-tv" ,  id ] , () => getWatchTV(Number(id as string)))

    const [queryParams] = useSearchParams()
 

  const seasonId = Number(queryParams.get("season")) || 1;
  const episodeId = Number(queryParams.get("episode")) || 1;
 

    // find whoose season is in the searchParams url

  const currentSeason = data?.detailSeasons?.find(
    (season) => season.season_number === seasonId
  );
 
   console.log(currentSeason)

  const currentEpisode = currentSeason?.episodes.find(
    (episode) => episode.episode_number === episodeId
  );

  if(isError) return <div> Error :</div>
  

     return (
        <FilmWatch
      {...data}
      media_type="tv"
      seasonId={seasonId}
      episodeId={episodeId}
      currentEpisode={currentEpisode}
    />
     )
}


export default TvWatch