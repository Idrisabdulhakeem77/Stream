import {useQuery} from '@tanstack/react-query'
import FilmDetail from '../../components/FilmDetail/FilmDetail'
import {getTVFullDetail} from "../../services/tv"
import {useParams} from "react-router-dom"
import { getWatchReturnedType } from '../../shared/types'


interface TvDetailsProps {}


const TvDetails = () => {
    const {id} = useParams()

    const { data , isError} = useQuery<getWatchReturnedType , Error>(["tv-detail" , id] ,  () =>  getTVFullDetail(Number(id as string)))

    if(isError) return <div> Error </div>
     return (
          <FilmDetail {...data}/>
     )
}

export default TvDetails