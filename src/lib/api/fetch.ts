import { instance } from "@app/lib/api/axios.config";
import { MovieParamsType } from "@app/types/movies/params";

export const getMovies = (params: MovieParamsType) =>
  instance.get(
    `discover/movie`,{params}
  );

export const getMovieDetail = (id: string) =>
  instance.get(`movie/${id}?language=uk`);

export const getGenres = () => instance.get("genre/movie/list?language=uk");
