import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withAPISession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
    body: { name, desc, price },
  } = req;

  if (req.method === "POST") {
    const stream = await client.stream.create({
      data: {
        name,
        price,
        desc,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      stream,
    });
  } else if (req.method === "GET") {
    const streams = await client.stream.findMany();

    res.json({
      ok: true,
      streams,
    });
  }
}

export default withAPISession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
