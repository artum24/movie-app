import useSWR, { SWRResponse } from "swr";
import { fetcher } from "./fetcher";
import { MovieResponse } from "@app/pages/api/movies";

export const useMovies = ({
  page,
  genres,
}: {
  page: number;
  genres: number[];
}): SWRResponse<MovieResponse> => {
  return useSWR(
    `/api/movies?page=${page}${
      genres ? `&with_genres=${genres.join("%2C")}` : ""
    }`,
    fetcher,
  );
};
