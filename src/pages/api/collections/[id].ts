// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCollection } from '@app/lib/api/fetch'
import { MovieType } from '@app/types/movies/movie'

export type CollectionResponse = {
  backdrop_path: string
  id: number
  name: string
  overview: string
  parts: MovieType[]
  poster_path: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CollectionResponse>
) {
  const query = req.query
  const result = await getCollection(query.id as string)
  res.status(200).json(result.data)
}
