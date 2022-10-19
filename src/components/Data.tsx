import React , {useEffect} from 'react'
import axios from 'axios'

const Data = () => {

    const fetchData = async() => {
        const { data} = await axios.get('https://api.jikan.moe/v4/genres/anime')
        console.log(data)
    }
     
    useEffect(() => {
        fetchData()
    } , [])

    return (
         <div>
             Data
         </div>
    )

     
}



export default Data