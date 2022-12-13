import { useQuery } from "@tanstack/react-query";
import { getWatchMovie } from "../../services/movie";
import { useParams } from "react-router-dom";
import { getWatchReturnedType } from "../../shared/types";
import FilmWatch from "../../components/FilmWatch/FilmWatch"

interface MovieWatchProps {}

const MovieWatch = () => {
  const { id } = useParams();
  const { data, isError } = useQuery<getWatchReturnedType, Error>(
    ["watch-movie", id],
    () => getWatchMovie(Number(id as string))
  );


  if (isError) return <div> Error </div>;

  return  <FilmWatch { ...data} media_type="movie" />;
};
export default MovieWatch;
