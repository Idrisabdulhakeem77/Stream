import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAnimeFullDetails } from "../../services/anime";
import AnimeDetail from "../../components/Anime/AnimeDetail"
 

const AnimeDetails = () => {
  const { id } = useParams();

  const { data, isError } = useQuery<any, Error>(["anime-details", id], () =>
    getAnimeFullDetails(Number(id as string))
  );

 
   if(isError) return <div> Error  </div>

  return (
    <>
        <AnimeDetail {...data } />
    </>
  );
};

export default AnimeDetails;
