import useSWR, { SWRResponse } from "swr";
import { fetcher } from "./fetcher";
import { MovieResponse } from "@app/pages/api/movies";
import { buildQueryParams, getSortByParam } from "@app/utils/buildQueryParams";
import { MoviePageType } from "@app/types/movies/params";

export const useGetMoviesByType = ({ searchType, genres, page }: {searchType: MoviePageType, genres?: number[], page?: number}): SWRResponse<MovieResponse> => {
  const currentDate = new Date().toISOString().split('T')[0];

  const params = buildQueryParams({page, with_genres: genres, language: 'uk', "vote_count.gte": 200, sort_by: getSortByParam(searchType), ...(searchType === 'upcoming' ? {primary_release_date: currentDate} : {})})
  return useSWR(`/api/movies?${params}`, fetcher);
};

