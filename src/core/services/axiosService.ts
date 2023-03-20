import axios from "axios";

axios.interceptors.request.use(
  (conf: any) => {
    //* for cookies or anything else
    return conf;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
});
