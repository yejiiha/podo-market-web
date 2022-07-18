import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withAPISession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
  } = req;

  const stream = await client.stream.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      streamMessages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              avatarUrl: true,
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  res.json({
    ok: true,
    stream,
  });
}

export default withAPISession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
