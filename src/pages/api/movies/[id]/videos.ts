// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMovieVideos } from "@app/lib/api/fetch";
import { MovieVideoType } from "@app/types/movies/movie";

export type MovieVideosResponseType = {
  results: MovieVideoType[];
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieVideosResponseType>,
) {
  const query = req.query;
  const result = await getMovieVideos(query.id as string);
  res.status(200).json(result.data);
}
