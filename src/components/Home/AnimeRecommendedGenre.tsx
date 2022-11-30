import { useQuery} from '@tanstack/react-query'


interface AnimeRecommendedGenreProps {
     currentTab : "anime" | null
}


const AnimeRecommendedGenre = ( {currentTab } : AnimeRecommendedGenreProps) =>  {
      return (
         <>
           <div>
             Anime Recommended Genre Component Bitches
           </div>
          </>
      )
}

export default AnimeRecommendedGenre