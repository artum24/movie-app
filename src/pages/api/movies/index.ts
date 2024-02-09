// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMovies } from '@app/lib/api/fetch'
import { MovieType } from '@app/types/movies/movie'
import { MovieParamsType } from '@app/types/movies/params'

export type MovieResponse = {
  results: MovieType[]
  total_pages: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieParamsType>
) {
  const result = await getMovies(req.query)
  res.status(200).json(result.data)
}
