// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getGenres } from "@app/lib/api/fetch";
import { GenreType } from "@app/types/movie";

export type GenresResponse = {
  genres: GenreType[];
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<GenresResponse>,
) {
  const result = await getGenres();
  res.status(200).json(result.data);
}
