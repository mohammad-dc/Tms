import { ObjectSchema, ObjectShape } from "yup";
import {
  ExtendedNextApiRequest,
  ExtendedNextApiResponse,
  UserSession,
  middlewareType,
} from "../../types/shared";
import responses from "./apiResponse";
import { verifyUserToken } from "./edgeMiddleware";
import { jwtVerify } from "jose";

export const getUserSessionInfoIfLoggedIn: (
  _t: string | undefined
) => Promise<UserSession | undefined> = async (token) => {
  try {
    if (token === undefined) {
      return;
    }

    return (
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
    ).payload as UserSession;
  } catch (error: any) {
    console.error(error);
  }
};

export const errorHandler = async (
  err: Error,
  res: ExtendedNextApiResponse
) => {
  console.error(err);

  // process.env.NODE_ENV == "production" && (await captureException(err));
  if (typeof err === "string") {
    // custom application error
    responses.customError(res, err);
    return res.end();
  }

  // default to 500 server error
  responses.somethingWentWrong(res);
  return res.end();
};

export const verifyToken: middlewareType = async (req, res) => {
  try {
    let { payload } = await verifyUserToken(req.cookies.token);
    req.user = payload as any;
  } catch {
    if (req.body.silent) return responses.success(res, "not_authorized");

    return responses.unauthorized(res);
  }
};

export const validateBody = <T extends ObjectShape = any>(
  schema: ObjectSchema<T>
) => {
  return async (req: ExtendedNextApiRequest, res: ExtendedNextApiResponse) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
    } catch (error: any) {
      return responses.customError(res, error);
    }
  };
};
