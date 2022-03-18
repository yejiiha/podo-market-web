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

  const faved = await client.record.findFirst({
    where: {
      productId: +id.toString(),
      userId: user?.id,
      kind: "Favorite",
    },
  });

  if (faved) {
    // delete
    await client.record.delete({
      where: {
        id: faved.id,
      },
    });
  } else {
    // create
    await client.record.create({
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
        kind: "Favorite",
      },
    });
  }

  const favCount = await client.record.count({
    where: {
      productId: +id.toString(),
      kind: "Favorite",
    },
  });

  await client.product.update({
    where: {
      id: +id.toString(),
    },
    data: {
      favCount,
    },
  });

  res.json({ ok: true });
}

export default withAPISession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
