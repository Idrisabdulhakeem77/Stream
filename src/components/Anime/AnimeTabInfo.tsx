import { Animes } from "../../shared/types"


interface AnimeTabInfoProps {
     detail : Animes
}


const AnimeTabInfo = ( {detail} : AnimeTabInfoProps) => {

     console.log(detail)
      return (
        <>
          <div>
             Anime Tab Info
          </div>
          </>
      )
}


export default AnimeTabInfo