import useSWR, { SWRResponse } from 'swr'
import { fetcher } from './fetcher'
import { CollectionResponse } from '@app/pages/api/collections/[id]'

export const useCollection = (id?: number): SWRResponse<CollectionResponse> => {
  return useSWR(id ? `/api/collections/${id}` : null, fetcher)
}
