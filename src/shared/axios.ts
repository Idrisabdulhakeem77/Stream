import axios from "axios"
import {  MOVIE_API_URL } from "./constants"

export const API_KEY =  "166ef97c1dbaca45757f8a7d461d59e0"



const instance = axios.create({
     baseURL : MOVIE_API_URL ,
     params : {
         api_key : API_KEY
     }
})




export default instance 