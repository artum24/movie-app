import useSWR, { SWRResponse } from 'swr'
import { fetcher } from './fetcher'
import { MovieCastResponseType } from '@app/pages/api/movies/[id]/credits'

export const useMovieCredits = (
  id: number
): SWRResponse<MovieCastResponseType> => {
  return useSWR(id ? `/api/movies/${id}/credits` : null, fetcher)
}
