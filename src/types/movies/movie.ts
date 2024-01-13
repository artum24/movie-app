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
  runTime: number;
  status: string;
  tagline: string;
  spoken_languages: LanguageType[];
  genres: GenreType[];
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
