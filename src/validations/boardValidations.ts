import { object, string, array, number } from "yup";

export const boardSchema = object().shape({
  name: string().required(),
  // columns: array(string()),
});

export const editBoardSchema = object().shape({
  name: string().required(),
  columns: array(string()),
  borderId: number().required(),
});
