import { getRecommendedGenreType, ItemsPage , Items } from "../shared/types";
import axios from "../shared/axios";


export const getRecommendedGenre =
  async (): Promise<getRecommendedGenreType> => {
    const movieGenres = (await axios.get("/genre/movie/list")).data.genres;
    const tvGenres = (await axios.get("/genre/tv/list")).data.genres;

    return {
      movieGenres,
      tvGenres,
    };
  };

export const getSearchKeyWord = async (query: string): Promise<string[]> => {
  return (
    await axios.get("/search/keyword", {
      params: {
        query,
      },
    })
  ).data.results
    .map((item: any) => item.name)
    .filter((_: any, index: number) => index < 5);
};

export const getSearchResult: (
  typeSearch: string,
  query: string,
  page: number
) => Promise<ItemsPage> = async (typeSearch, query, page) => {
  const data = (
    await axios.get(`/search/${typeSearch}`, {
      params: {
        query,
        page,
      },
    })
  ).data;
 

   
  const results = data.results
    .map((item: Items) => ({
      ...item,
      ...(typeSearch !== "All" && { media_type: typeSearch }),
    }))
    .filter((item: Items) => item.poster_path || item.profile_path);

  return {
    ...data,
    results,
  };
};
