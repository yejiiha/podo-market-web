import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withAPISession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  console.log(req.session);

  console.log(token);

  const findToken = await client.token.findUnique({
    where: {
      payload: token,
    },
    include: {
      user: true,
    },
  });

  console.log(findToken);

  if (!findToken) {
    return res.status(404).end();
  } else {
    req.session.user = {
      id: findToken.userId,
    };

    await req.session.save();
    await client.token.deleteMany({
      where: {
        userId: findToken.userId,
      },
    });

    res.json({ ok: true });
  }
}

export default withAPISession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
  })
);
