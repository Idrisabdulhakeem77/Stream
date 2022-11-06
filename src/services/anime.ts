import axios from 'axios'
import { Animes } from '../shared/types'



export const getAnime = async() : Promise<Animes[]> => {
    const {data} = (await axios.get("https://api.jikan.moe/v4/top/anime")).data
    
    console.log(data)

    return  data
    
}


