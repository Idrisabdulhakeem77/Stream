import { FunctionComponent } from "react";
import {Items} from '../../shared/types'


interface FilmListForBookmarkedAndRecentProps {
     films : Items[] | undefined
     pageType : string 
     loading : boolean
}


const  FilmListForBookmarkedAndRecent : FunctionComponent<FilmListForBookmarkedAndRecentProps> =() => {
      return(
         <div>
             Something
         </div>
      )
}

export default FilmListForBookmarkedAndRecent