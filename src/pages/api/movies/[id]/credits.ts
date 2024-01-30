// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMovieCredits } from "@app/lib/api/fetch";
import { ActorType } from "@app/types/movies/movie";

export type MovieCastResponseType = {
  cast: ActorType[];
  crew: ActorType[];
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieCastResponseType>,
) {
  const query = req.query;
  const result = await getMovieCredits(query.id as string);
  res.status(200).json(result.data);
}
