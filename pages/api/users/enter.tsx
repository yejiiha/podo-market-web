import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import twilio from "twilio";
import mail from "@sendgrid/mail";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

mail.setApiKey(process.env.SENDGRID_API_KEY!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;

  const phoneNumber = phone;
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

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: `82${process.env.MY_PHONE}`,
      body: `Your login Token is ${payload}.`,
    });

    console.log(message);
  } else if (email) {
    const emailMessage = await mail.send({
      from: "yejiiha.dev@gmail.com",
      to: "yejiiha.dev@gmail.com",
      subject: "Your Podo Market Veirificaction Email 🔒",
      text: `Your token is ${payload}.`,
      html: `<strong>Your token is ${payload} 😘.</strong>`,
    });

    console.log(emailMessage);
  }

  return res.json({
    ok: true,
  });
}

export default withHandler({
  method: "POST",
  handler,
  isPrivate: false,
});
