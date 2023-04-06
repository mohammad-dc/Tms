import { object, string } from "yup";

export const authSchema = object().shape({
  email: string().email().required(),
  password: string().min(3).required(),
});
