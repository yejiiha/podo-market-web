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
    session: { user },
  } = req;

  const faved = await client.favorite.findFirst({
    where: {
      productId: +id.toString(),
      userId: user?.id,
    },
  });

  if (faved) {
    // delete
    await client.favorite.delete({
      where: {
        id: faved.id,
      },
    });
  } else {
    // create
    await client.favorite.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        product: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
  }

  res.json({
    ok: true,
  });
}

export default withAPISession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
