import {
  AuthRequestBodyType,
  AuthResponseBodyType,
  GetUserInfoResponseBodyType,
} from "../../types/middlewares/users";
import { ApiRes } from "../../types/shared";
import { axiosClient } from "./axiosService";

export const login = (payload: AuthRequestBodyType) => {
  return axiosClient
    .post<ApiRes<AuthResponseBodyType>>(`/users/login`, payload)
    .then((response) => response.data);
};

export const register = (payload: AuthRequestBodyType) => {
  return axiosClient
    .post<ApiRes<AuthResponseBodyType>>(`/users/register`, payload)
    .then((response) => response.data);
};

export const getCurrentUserInfo = () => {
  return axiosClient
    .get<ApiRes<GetUserInfoResponseBodyType>>(`/users/getCurrentUserInfo`)
    .then((response) => response.data);
};
