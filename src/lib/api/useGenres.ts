import useSWR, { SWRResponse } from 'swr'
import { fetcher } from './fetcher'
import { GenresResponse } from '@app/pages/api/genres'

export const useGenres = (): SWRResponse<GenresResponse> => {
  return useSWR(`/api/genres`, fetcher)
}
