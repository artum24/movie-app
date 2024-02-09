import useSWR, { SWRResponse } from 'swr'
import { fetcher } from './fetcher'
import { MovieResponse } from '@app/pages/api/movies'

export const useMovieSimilar = (id: number): SWRResponse<MovieResponse> => {
  return useSWR(id ? `/api/movies/${id}/similar` : null, fetcher)
}
