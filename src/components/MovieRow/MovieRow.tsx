import { useGetMoviesByType } from "@app/lib/api/useGetMoviesByType";
import { useGenres } from "@app/lib/api/useGenres";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { MovieSkeletonCard } from "@app/components/MovieCard/MovieSkeletonCard";
import Link from "next/link";
import { MoviePageType } from "@app/types/movies/params";
import { MovieList } from "@app/components/MovieList/MovieList";

type MovieRowProps = {
  movieType: MoviePageType;
  title: string;
  path: string;
};
export const MovieRow = ({ movieType, title, path }: MovieRowProps) => {
  const { data: genresData } = useGenres();
  const { data, isLoading } = useGetMoviesByType({ searchType: movieType });

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
              <MovieSkeletonCard height={112} width={80} key={skelet} />
            ))}
          {!isLoading && (
            <MovieList movies={data?.results} genres={genresData?.genres} />
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
