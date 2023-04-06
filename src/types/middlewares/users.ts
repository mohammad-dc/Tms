//* auth endpoint

import { UserProps } from "../pageProps";

export type AuthRequestBodyType = {
  email: string;
  password: string;
};

export type AuthResponseBodyType = {
  success: boolean;
  message: string;
};

//* get user endpoint

export type GetUserInfoResponseBodyType = {
  success: boolean;
  response: UserProps;
};
