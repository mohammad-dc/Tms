import { object, string } from "yup";

export const BoardColumnSchema = object().shape({
  name: string().required(),
});
