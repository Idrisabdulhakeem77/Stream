import { useEffect } from 'react'
// import axios from '../shared/animeaxiosInstance'
import axios from 'axios'



const fetchData =  async () => {
    // const response =   await axios.get("/anime/suggestions")
    const response = await axios.get('https://api.myanimelist.net/v2/anime')
    console.log(response)
}

const DataFetch = () => {
    useEffect(() => {
         fetchData()
    } , [])
     return (
         <div>
             Data fetch
         </div>
     )
}

export default DataFetch