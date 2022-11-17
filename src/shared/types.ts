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
}

export interface Animes {
  score: number;
  mal_id: number;
  title: string;
  syniosis: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };

    webp: {};
  };
  genres: Object[];
  trailer: Object[];
  pagination : {
    last_visible_page : number
  }
}


export interface AnimeItempage {
     pagination : {
      last_visible_page : number ,
      has_next_page : boolean,
      current_page : number,
       items : { count : number , per_page : number , total : number }
     }
     data : Animes[] | undefined
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


