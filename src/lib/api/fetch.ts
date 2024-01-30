import { instance } from "@app/lib/api/axios.config";
import { MovieParamsType } from "@app/types/movies/params";

export const getMovies = (params: MovieParamsType) =>
  instance.get(`discover/movie`, { params });

export const getMovieDetail = (id: string) =>
  instance.get(`movie/${id}?language=uk`);

export const getMovieCredits = (id: string) =>
  instance.get(`movie/${id}/credits?language=uk`);

export const getMovieVideos = (id: string) =>
  instance.get(`movie/${id}/videos?language=uk`);

export const getMovieSimilar = (id: string) =>
  instance.get(`movie/${id}/similar?language=uk&page=1`);

export const getCollection = (id: string) =>
  instance.get(`collection/${id}?language=uk`);

export const getGenres = () => instance.get("genre/movie/list?language=uk");
