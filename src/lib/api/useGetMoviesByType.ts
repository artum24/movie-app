import useSWR, { SWRResponse } from 'swr'
import { fetcher } from './fetcher'
import { MovieResponse } from '@app/pages/api/movies'
import { buildQueryParams, getSortByParam } from '@app/utils/buildQueryParams'
import { MoviePageType } from '@app/types/movies/params'

type UseGetMoviesByTypeParamsType = {
  searchType: MoviePageType
  genre?: string
  page?: number
  year?: string
  rating?: string
}

export const useGetMoviesByType = ({
  searchType,
  genre,
  page,
  year,
  rating
}: UseGetMoviesByTypeParamsType): SWRResponse<MovieResponse> => {
  const currentDate = new Date().toISOString().split('T')[0]

  const params = buildQueryParams({
    page,
    year,
    language: 'uk',
    'vote_average.gte': rating,
    with_genres: genre,
    'vote_count.gte': 200,
    sort_by: getSortByParam(searchType),
    ...(searchType === 'upcoming' ? { primary_release_date: currentDate } : {})
  })
  return useSWR(`/api/movies?${params}`, fetcher)
}
