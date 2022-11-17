import {Reviews  , Items , FilmInfo , Video } from '../shared/types'
import axios from '../shared/axios'



const getFullMovieDetails = async (  id : number ) :Promise<FilmInfo> => { 
    const response =  await Promise.all([
        axios.get(`/movie/${id}`),
        axios.get(`/movie/${id}/credits`),
        axios.get(`/movie/${id}/reviews`),
        axios.get(`/movie/${id}/similar`),
        axios.get(`/movie/${id}/videos`),
    ])



    return {
         ( response as any)
    }
     
}