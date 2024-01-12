import { useState } from "react";
import { GenreType } from "@app/types/movie";
import { MovieCard } from "@app/components/MovieCard/MovieCard";
import { MovieSkeletonCard } from "@app/components/MovieCard/MovieSkeletonCard";
import { Filter, MovieFilter } from "@app/components/MovieFilter/MovieFilter";
import { useMovies } from "@app/lib/api/useMovies";
import { useGenres } from "@app/lib/api/useGenres";
import { MoviePagination } from "@app/components/MoviePagination/MoviePagination";

export default function Home() {
  const [filter, setFilter] = useState<Filter>({ genres: [] });
  const [page, setPage] = useState(1);
  const { data: moviesData, isLoading: movieLoading } = useMovies({
    page,
    genres: filter.genres,
  });
  const { data: genresData, isLoading: genreLoading } = useGenres();

  const onChangePage = (page: number) => {
    setPage(page);
  };

  const handleResetFilters = () => setFilter({ genres: [] });

  const handleSubmitFilters = (filters: Filter) => setFilter(filters);

  const isLoading = movieLoading || genreLoading;
  return (
    <main className="px-5 sm:px-10 xl:px-40 my-8 md:my-12">
      <MovieFilter
        handleResetFilters={handleResetFilters}
        handleSubmitFilters={handleSubmitFilters}
        genres={genresData?.genres || []}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-9">
        {isLoading &&
          Array.from(Array(20).keys()).map((skelet) => (
            <MovieSkeletonCard key={skelet} />
          ))}
        {!isLoading &&
          moviesData?.results?.map((movie) => {
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
                movieGenres={movieGenres}
                movie={movie}
                key={movie.id}
              />
            );
          })}
      </div>
      {moviesData?.total_pages && (
        <MoviePagination
          page={page}
          onChangePage={onChangePage}
          totalPages={moviesData.total_pages}
        />
      )}
    </main>
  );
}
