import useSWR, { SWRResponse } from 'swr'
import { fetcher } from './fetcher'
import { MovieVideosResponseType } from '@app/pages/api/movies/[id]/videos'

export const useMovieVideos = (
  id: number
): SWRResponse<MovieVideosResponseType> => {
  return useSWR(id ? `/api/movies/${id}/videos` : null, fetcher)
}
