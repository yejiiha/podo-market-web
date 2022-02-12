import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: "podo-session",
  password: process.env.COOKIE_PASSWORD!,
};

export function withAPISession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
