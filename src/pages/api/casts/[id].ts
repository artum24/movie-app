// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {getDetailCast} from "@app/lib/api/fetch";
import {CastType} from "@app/types/casts/cast";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CastType>,
) {
  const query = req.query;
  const result = await getDetailCast(query.id as string);
  res.status(200).json(result.data);
}
