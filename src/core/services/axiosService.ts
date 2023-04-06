import axios from "axios";
import { getCookie } from "./cookiesServices";

axios.interceptors.request.use(
  (conf: any) => {
    const token = getCookie("token");
    conf.headers = { Authorization: "Bearer " + token };
    return conf;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
});
