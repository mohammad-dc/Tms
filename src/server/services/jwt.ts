import { SignJWT } from "jose";
import { UserSession } from "../../types/shared";

type tokenType = UserSession;

export const createToken = async (payload: tokenType): Promise<string> => {
  try {
    const privateKey = new TextEncoder().encode(process.env.JWT_SECRET);
    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer(process.env.JWT_ISSUER)
      .setAudience(process.env.JWT_AUDIENCE)
      .setExpirationTime("30d")
      .sign(privateKey);
    return jwt;
  } catch (error: any) {
    throw new Error(error);
  }
};
