import { useState } from 'react'
import { MovieSkeletonCard } from '@app/components/MovieCard/MovieSkeletonCard'
import { MovieFilter } from '@app/components/MovieFilter/MovieFilter'
import { useGenres } from '@app/lib/api/useGenres'
import { MoviePagination } from '@app/components/MoviePagination/MoviePagination'
import { useGetMoviesByType } from '@app/lib/api/useGetMoviesByType'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { MoviePageType } from '@app/types/movies/params'
import { MovieList } from '@app/components/MovieList/MovieList'

export default function Home() {
  const { query } = useRouter()
  const [filter, setFilter] = useState<MovieFilter>({
    genre: '',
    year: '',
    rating: ''
  })
  const [page, setPage] = useState(1)

  const { data: moviesData, isLoading: movieLoading } = useGetMoviesByType({
    searchType: query?.type as MoviePageType,
    page,
    ...filter
  })

  const { data: genresData, isLoading: genreLoading } = useGenres()

  const onChangePage = (page: number) => {
    setPage(page)
  }

  const isLoading = movieLoading || genreLoading
  return (
    <main className='px-5 sm:px-10 xl:px-40 my-8 md:my-12'>
      <MovieFilter
        setFilter={setFilter}
        filter={filter}
        genres={genresData?.genres || []}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2x md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-9'>
        {isLoading &&
          Array.from(Array(20).keys()).map((skelet) => (
            <MovieSkeletonCard key={skelet} />
          ))}
        {!isLoading && (
          <MovieList
            genres={genresData?.genres || []}
            movies={moviesData?.results || []}
            imageStyles='w-full'
          />
        )}
      </div>
      {moviesData?.total_pages && (
        <MoviePagination
          page={page}
          onChangePage={onChangePage}
          totalPages={moviesData.total_pages}
        />
      )}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const type = context.params?.type as string
  const availableMoviesPageType = ['top-rated', 'popular', 'upcoming']
  if (!availableMoviesPageType.includes(type)) {
    return {
      notFound: true
    }
  }
  return { props: {} }
}
