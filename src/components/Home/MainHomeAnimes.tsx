

interface MainHomeAnimesProp {
    isLoading : boolean,
    animeData : any
}


const MainHomeAnimes = ( {animeData , isLoading} : MainHomeAnimesProp ) => {
    console.log(animeData)
     
     return (
         <div>
             Home Animes
         </div>
     )
}

export default MainHomeAnimes