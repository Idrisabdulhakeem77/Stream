import axios from "../shared/axios"
import { Items } from "../shared/types"
import { HomeFilms } from "../shared/types"



export const getHomeMovies = async (): Promise<HomeFilms> => {
    const endpoints: { [key: string]: string } = {
      Trending: "/trending/movie/day",
      Popular: "/movie/popular",
      "Top Rated": "/movie/top_rated",
      Hot: "/trending/movie/day?page=2",
      Upcoming: "/movie/upcoming",
    };
  
    const responses = await Promise.all(
      Object.entries(endpoints).map((endpoint) => axios.get(endpoint[1]))
    );
  
    const data = responses.reduce((final, current, index) => {
      final[Object.entries(endpoints)[index][0]] = current.data.results.map(
        (item: Items) => ({
          ...item,
          media_type: "movie",
        })
      );
  
       
      return final;
    }, {} as HomeFilms);
  
    return data;
  };