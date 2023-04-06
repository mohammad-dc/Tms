import { jwtVerify } from "jose";

export const verifyUserToken = async (token: string | undefined) => {
  try {
    if (token === undefined) {
      throw new Error("UnauthorizedError: Empty Token");
    }

    return await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
  } catch (error: any) {
    throw new Error(error);
  }
};
