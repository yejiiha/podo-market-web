import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "12@gmail.com",
      name: "x_x",
    },
  });

  res.json({
    ok: true,
    data: "zz",
  });
}
