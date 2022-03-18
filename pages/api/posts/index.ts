import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withAPISession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { question, latitude, longitude },
    session: { user },
    query: { latitude: lat, longitude: lng },
  } = req;

  if (req.method === "POST") {
    const post = await client.post.create({
      data: {
        question,
        longitude,
        latitude,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      post,
    });
  }

  if (req.method === "GET") {
    const parsedLatitude = parseFloat(lat.toString());
    const parsedLongitude = parseFloat(lng.toString());

    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            wonderings: true,
            answers: true,
          },
        },
      },
      where: {
        latitude: {
          gte: parsedLatitude - 0.01,
          lte: parsedLatitude + 0.01,
        },
        longitude: {
          gte: parsedLongitude - 0.01,
          lte: parsedLongitude + 0.01,
        },
      },
    });

    res.json({
      ok: true,
      posts,
    });
  }
}

export default withAPISession(
  withHandler({
    methods: ["POST", "GET"],
    handler,
  })
);
