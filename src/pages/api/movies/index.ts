// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMovies } from "@app/lib/api/fetch";
import { MovieType } from "@app/types/movie";

export type MovieResponse = {
  results: MovieType[];
  total_pages: number;
};

export type MovieRequest = {
  page: string;
  genres: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieResponse>,
) {
  const result = await getMovies(req.query as MovieRequest);
  res.status(200).json(result.data);
}
