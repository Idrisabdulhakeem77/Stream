import axios from "axios"


const instance = axios.create({
     baseURL :  'https://api.myanimelist.net/v2/',

})

export default instance 