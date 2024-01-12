// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMovieDetail } from "@app/lib/api/fetch";
import { MovieDetailType } from "@app/types/movie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieDetailType>,
) {
  const query = req.query;
  const result = await getMovieDetail(query.id as string);
  res.status(200).json(result.data);
}
