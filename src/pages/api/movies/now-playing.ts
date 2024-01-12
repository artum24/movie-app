// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlayingMovies } from "@app/lib/api/fetch";
import { MovieType } from "@app/types/movie";

export type MovieResponse = {
  results: MovieType[];
  total_pages: number;
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<MovieResponse>,
) {
  const result = await getNowPlayingMovies();
  res.status(200).json(result.data);
}
