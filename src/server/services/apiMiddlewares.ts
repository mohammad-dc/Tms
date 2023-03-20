import { ObjectSchema, ObjectShape } from "yup";
import {
  ExtendedNextApiRequest,
  ExtendedNextApiResponse,
} from "../../types/shared";
import responses from "./apiResponse";

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
