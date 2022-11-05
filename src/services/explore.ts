import axios from "axios";

import { ConfigType, Items, ItemsPage } from "../shared/types";


export const getExploreMovie: (
    page: number,
    config?: ConfigType
  ) => Promise<ItemsPage> = async (page, config = {}) => {
    const data = (
      await axios.get("/discover/movie", {
        params: {
          ...config,
          page,
        },
      })
    ).data;
  
    const adjustedItems = data.results
      .filter((item: Items) => item.poster_path)
      .map((item: any) => ({
        ...item,
        media_type: "movie",
      }));
  
    return {
      ...data,
      results: adjustedItems,
    };
  };


