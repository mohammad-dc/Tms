import { string, object, array, number } from "yup";

export const taskSchema = object().shape({
  title: string().required(),
  description: string(),
  subTasks: array(string()),
  status: number().oneOf([1, 2, 3, 4]).required(),
});
