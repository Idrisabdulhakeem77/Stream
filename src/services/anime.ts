import axios from 'axios'



export const getAnime = async() => {
    const {data} = (await axios.get("https://api.jikan.moe/v4/top/anime")).data
    
    console.log(data)

    return  data
    
}


