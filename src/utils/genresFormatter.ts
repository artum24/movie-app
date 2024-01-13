import { GenreType } from "@app/types/movies/movie";

export const genresFormatter = (movieGenres: GenreType[]) =>
  movieGenres.map(
    (genre, index) =>
      `${genre.name} ${index !== movieGenres.length - 1 ? ", " : ""}`,
  );
