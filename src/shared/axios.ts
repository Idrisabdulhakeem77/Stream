import axios from "axios"
import { API_URL } from "./constants"



const instance = axios.create({
     baseURL : API_URL ,
     params : {
         api_key : ""
     }
})

export default instance 