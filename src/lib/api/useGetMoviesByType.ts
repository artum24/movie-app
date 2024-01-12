import useSWR, { SWRResponse } from "swr";
import { fetcher } from "./fetcher";
import { MovieResponse } from "@app/pages/api/movies";

export const useGetMoviesByType = (
  searchType: string,
): SWRResponse<MovieResponse> => {
  return useSWR(`/api/movies/${searchType}`, fetcher);
};
