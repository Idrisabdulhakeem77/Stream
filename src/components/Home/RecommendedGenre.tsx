import {FC} from 'react'


interface RecommendedGenresProps {
     currentTab : string
}

const RecommendedGenres: FC<RecommendedGenresProps>  = ( { currentTab  }) => {
      return (
         <div>
             Recommended Genre
         </div>
      )
} 


export default  RecommendedGenres 