import { NextApiRequest, NextApiResponse } from "next";

interface ConfigType {
  method: "GET" | "POST" | "DELETE";
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function withHandler({
  method,
  isPrivate = true,
  handler,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }

    // isPrivate이 true일 때 로그인 유저만 호출할 수 있음
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "로그인을 해주세요." });
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
