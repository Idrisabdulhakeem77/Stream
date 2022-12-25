export interface Items {
  poster_path: string;
  overview: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  media_type: "movie" | "tv" | "person";
  release_date?: string;
  original_title?: string;
  title?: string;
  adult?: boolean;
  video?: boolean;
  first_air_date?: string;
  original_name?: string;
  origin_country?: string[];
  name?: string;
  profile_path?: string;
}

export interface HomeFilms {
  [key: string]: Items[];
}

export interface HomeAnimes {
  [key: string]: Animes[]
}

export interface getRecommendedGenreType {
  movieGenres: { id: number; name: string }[];
  tvGenres: { id: number; name: string }[];
}

export interface ItemsPage {
  page: number;
  results: Items[];
  total_results: number;
  total_pages: number;
}

export interface ConfigType {
  [key: string]: string | number;
}

export interface User {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  uid: string;
  fullname?: string | null
}

export interface Animes {
  score: number;
  aired: {
    string: string
  }
  status: string;
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };

  };
  genres: Object[];
  trailer: Object[];
  pagination: {
    last_visible_page: number;
  };
}
export interface CommentDataType {
  user: User;
  value: string;
  reactions: { [key: string]: string };
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  isEdited: boolean;
}

export interface AnimeItempage {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: { count: number; per_page: number; total: number };
  };
  data: Animes[] | undefined;
}

export interface DetailMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: any;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string; english_name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: "movie";
}

export interface DetailTV {
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: any;
  networks: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }[];
  spoken_languages: { iso_639_1: string; name: string; english_name: string }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  media_type?: "tv";
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Reviews {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: any;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
export interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: {
    department: string;
    job: string;
    credit_id: string;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
  guest_stars: {
    credit_id: string;
    order: number;
    character: string;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
}

export interface DetailSeason {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
}


export interface FilmInfo {
  reviews?: Reviews[] | undefined;
  similar?: Items[] | undefined;
  videos?: Video[] | undefined;
  detail?: DetailMovie | DetailTV | undefined;
  credits?: Cast[] | undefined;
}

export interface getRecommendedAnimeGenreType {
  data: {
    mal_id: number;
    name: string;
    url: string


  }[]
}

export interface getWatchReturnedType {
  detail?: DetailTV | DetailMovie | undefined;
  recommendations?: Items[] | undefined;
  detailSeasons?: DetailSeason[] | undefined;
}

export interface getRecommendedAnimeType {
  entry: {
    mal_id: string,
    title: string
    images: {
      jpg: {
        image_url: string;
        // large_image_url: string;
        // small_image_url: string;
      };
    }
  }


}



export interface AnimeCast {
  character: {
    images: {
      jpg: {
        image_url: string
      }
    }
    name: string
    mal_id: number

  }
  role: "string"
  voice_actors: {
    person: {
      images: {
        jpg: {
          image_url: string
        }
      }
      name: string
      mal_id: number
    }
  }[]
} 