import { useQuery} from '@tanstack/react-query'
import {getAnimeRecommendedGenres} from '../../services/anime'


interface AnimeRecommendedGenreProps {
     currentTab : "anime" | null
}


const AnimeRecommendedGenre = ( {currentTab } : AnimeRecommendedGenreProps) =>  {
  const { data , error , isError  , isLoading} = useQuery(["genres"] , getAnimeRecommendedGenres) 

      return (
         <>
           <div>
             Anime Recommended Genre Component Bitches
           </div>
          </>
      )
}

export default AnimeRecommendedGenre