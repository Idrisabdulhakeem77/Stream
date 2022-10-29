import axios from "axios"
import { API_URL } from "./constants"



const instance = axios.create({
     baseURL : API_URL ,
     params : {
         api_key : "166ef97c1dbaca45757f8a7d461d59e0"
     }
})

export default instance 