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
     [key : string] : Items[] ;
} 