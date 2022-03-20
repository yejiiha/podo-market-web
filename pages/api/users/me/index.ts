import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withAPISession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const profile = await client.user.findUnique({
      where: {
        id: req.session.user?.id,
      },
    });

    res.json({
      ok: true,
      profile,
    });
  }

  if (req.method === "POST") {
    const {
      session: { user },
      body: { email, phone, name },
    } = req;

    const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (email && email !== currentUser?.email) {
      const alreadyExists = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
          },
        })
      );

      if (alreadyExists) {
        return res.json({
          ok: false,
          error: "이미 사용 중인 이메일입니다.",
        });
      }

      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          email,
        },
      });

      res.json({
        ok: true,
      });
    }

    if (phone && phone !== currentUser?.phoneNumber) {
      const alreadyExists = Boolean(
        await client.user.findUnique({
          where: {
            phoneNumber: phone,
          },
          select: {
            id: true,
          },
        })
      );

      if (alreadyExists) {
        return res.json({
          ok: false,
          error: "이미 사용 중인 전화번호입니다.",
        });
      }

      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phoneNumber: phone,
        },
      });

      res.json({
        ok: true,
      });
    }

    if (name) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name,
        },
      });

      res.json({
        ok: true,
      });
    }

    res.json({
      ok: true,
    });
  }

  res.status(200).end();
}

export default withAPISession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
