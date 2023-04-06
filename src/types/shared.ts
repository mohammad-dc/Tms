import { JWTPayload } from "jose";
import { NextApiRequest, NextApiResponse } from "next/types";

export type ApiRes<T> = {
  success: boolean;
  response: T;
  message?: string;
};

export interface ExtendedNextApiRequest<T = any> extends NextApiRequest {
  body: T;
  user: UserSession;
}
export interface ExtendedNextApiResponse<T = any>
  extends NextApiResponse<ApiRes<T>> {}

export type middlewareType<T = any, K = any> = (
  _req: ExtendedNextApiRequest<T>,
  _res: ExtendedNextApiResponse<K>
) => Promise<void | string>;

export type endPointsType<T = any, K = any> = {
  [endPoint: string]: {
    method?: "GET" | "POST" | "DELETE";
    middleWares: middlewareType<T, K>[];
  };
};

export interface UserSession extends JWTPayload {
  userId: number;
  email: string;
}
