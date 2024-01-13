import { useGetMoviesByType } from "@app/lib/api/useGetMoviesByType";
import { MovieCard } from "@app/components/MovieCard/MovieCard";
import { useGenres } from "@app/lib/api/useGenres";
import { GenreType } from "@app/types/movie";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { MovieSkeletonCard } from "@app/components/MovieCard/MovieSkeletonCard";
import Link from "next/link";

type MovieRowProps = {
  movieType: string;
  title: string;
  path: string;
};
export const MovieRow = ({ movieType, title, path }: MovieRowProps) => {
  const { data: genresData } = useGenres();
  const { data, isLoading } = useGetMoviesByType(movieType);

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <p className="text-3xl font-bold">{title}</p>
        <Link
          href={path}
          className="underline text-lg font-bold text-red-500 cursor-pointer"
        >
          Подивитись всі
        </Link>
      </div>
      <ScrollArea>
        <div className="flex w-max space-x-4">
          {isLoading &&
            Array.from(Array(20).keys()).map((skelet) => (
              <MovieSkeletonCard key={skelet} />
            ))}
          {!isLoading &&
            data?.results.map((movie) => {
              const movieGenres: GenreType[] = [];
              movie.genre_ids.forEach((genreId) => {
                const selectedGenre = genresData?.genres.find(
                  (movieGenre) => movieGenre.id === genreId,
                );
                if (selectedGenre) {
                  movieGenres.push(selectedGenre);
                }
              });
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  movieGenres={movieGenres}
                />
              );
            })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
