import {
  AuthRequestBodyType,
  AuthResponseBodyType,
  GetUserInfoResponseBodyType,
} from "../../types/middlewares/users";
import { UserSession, middlewareType } from "../../types/shared";
import { Users } from "../models/usersModel";
import { getUserSessionInfoIfLoggedIn } from "../services/apiMiddlewares";
import responses from "../services/apiResponse";
import { createToken } from "../services/jwt";

export const login: middlewareType<
  AuthRequestBodyType,
  AuthResponseBodyType
> = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _usersModel = new Users();

    const result = await _usersModel.loginUser(email, password);

    if (result) {
      const token = await createToken({
        email: result.email,
        userId: result.id,
      });
      res.setHeader(
        "Set-Cookie",
        `token=${token}; path=/; SameSite=Strict; HttpOnly`
      );
      return responses.authSuccess(res, 0);
    } else return responses.emailOrPasswordWrong(res);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const register: middlewareType<
  AuthRequestBodyType,
  AuthResponseBodyType
> = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _usersModel = new Users();

    await _usersModel.registerUser(email, password);
    return responses.authSuccess(res, 1);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCurrentUserInfo: middlewareType<
  unknown,
  GetUserInfoResponseBodyType
> = async (req, res) => {
  try {
    const token = (await getUserSessionInfoIfLoggedIn(
      req.cookies.token
    )) as UserSession;
    const _usersModel = new Users();
    const user = await _usersModel.getUserInfo(token.userId);
    return responses.success(res, user);
  } catch (error: any) {
    throw new Error(error);
  }
};
