import { instance } from "@app/lib/api/axios.config";
import { MovieRequest } from "@app/pages/api/movies";

export const getMovies = ({ page, genres }: MovieRequest) =>
  instance.get(
    `discover/movie?page=${page}&language=uk${
      genres ? `&with_genres=${genres}` : ""
    }`,
  );

export const getNowPlayingMovies = () =>
  instance.get(`movie/now_playing?language=uk`);

export const getPopularMovies = () => instance.get(`movie/popular?language=uk`);

export const getTopRatedMovies = () =>
  instance.get(`movie/top_rated?language=uk`);

export const getUpcomingMovies = () =>
  instance.get(`movie/upcoming?language=uk`);

export const getMovieDetail = (id: string) =>
  instance.get(`movie/${id}?language=uk`);

export const getGenres = () => instance.get("genre/movie/list?language=uk");
