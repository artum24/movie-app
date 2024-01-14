export type MovieParamType =
  | "page"
  | "sort_by"
  | "with_genres"
  | "language"
  | "vote_count.gte"
  | "primary_release_date"
  | "with_release_type"
  | "year";

export type MoviePageType = "popular" | "top-rated" | "upcoming";

export type MovieParamsType = {
  page?: number;
  sort_by?: string;
  with_genres?: number[] | string;
  language?: string;
  "vote_count.gte"?: number;
  primary_release_date?: string;
  with_release_type?: string;
  year?: string;
  "vote_average.gte"?: string;
};
export type MovieParamKeys = keyof MovieParamsType;
