// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMovieSimilar } from '@app/lib/api/fetch'
import { MovieResponse } from '@app/pages/api/movies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieResponse>
) {
  const query = req.query
  const result = await getMovieSimilar(query.id as string)
  res.status(200).json(result.data)
}
