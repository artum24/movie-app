import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../fetcher'
import { CastType } from '@app/types/casts/cast'

export const useDetailCast = (id: string): SWRResponse<CastType> => {
  return useSWR(`/api/casts/${id}`, fetcher)
}
