import { useState } from "react";
import { GenreType } from "@app/types/movies/movie";
import { MovieCard } from "@app/components/MovieCard/MovieCard";
import { MovieSkeletonCard } from "@app/components/MovieCard/MovieSkeletonCard";
import { Filter, MovieFilter } from "@app/components/MovieFilter/MovieFilter";
import { useGenres } from "@app/lib/api/useGenres";
import { MoviePagination } from "@app/components/MoviePagination/MoviePagination";
import { useGetMoviesByType } from "@app/lib/api/useGetMoviesByType";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { MoviePageType } from "@app/types/movies/params";

export default function Home() {
  const {query} = useRouter()
  const [filter, setFilter] = useState<Filter>({ genres: [] });
  const [page, setPage] = useState(1);

  const { data: moviesData, isLoading: movieLoading } = useGetMoviesByType({
    genres: filter.genres,
    searchType: query?.type as MoviePageType,
    page
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
                imageStyles="w-full"
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const  type = context.params?.type as string;
  const availableMoviesPageType = ['top-rated','popular', 'upcoming' ]
  if (!availableMoviesPageType.includes(type)) {
    return {
      notFound: true,
    }
  }
  return {props: {}}
}
