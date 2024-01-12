import useSWR, { SWRResponse } from "swr";
import { fetcher } from "./fetcher";
import { MovieDetailType } from "@app/types/movie";

export const useDetailMovie = (id: number): SWRResponse<MovieDetailType> => {
  return useSWR(`/api/movies/${id}`, fetcher);
};
