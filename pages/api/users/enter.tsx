import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;

  const phoneNumber = +phone;
  const payload = Math.floor(100000 + Math.random() * 900000) + ""; // 6자리 랜덤 토큰

  const userData = phone ? { phoneNumber } : email ? { email } : null;

  if (!userData) return res.status(400).json({ ok: false });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          // 조건에 맞는 유저가 있으면 token에 connect 하기
          where: {
            ...userData,
          },
          // 조건에 맞는 유저가 없다면 유저를 만들고 token에 connect하기
          create: {
            ...userData,
            name: "익명",
          },
        },
      },
    },
  });

  console.log(token);

  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
