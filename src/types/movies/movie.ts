export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetailType = MovieType & {
  budget: number;
  homepage: string;
  imdb_id: string;
  production_companies: CompanyType[];
  production_countries: CountryType[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  spoken_languages: LanguageType[];
  genres: GenreType[];
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
};

export type CompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type CountryType = {
  iso_3166_1: string;
  name: string;
};

export type LanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type GenreType = {
  id: number;
  name: string;
};

export type ActorType = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type MovieVideoType = {
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
};
