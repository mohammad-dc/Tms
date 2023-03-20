import {
  CreateTaskRequestBodyType,
  CreateTaskResponseBodyType,
  deleteTaskRequestBodyType,
  deleteTaskResponseBodyType,
  editTaskRequestBodyType,
  editTaskResponseBodyType,
} from "../../types/middlewares/tasks";
import { ApiRes } from "../../types/shared";
import { axiosClient } from "./axiosService";

export const createTask = (payload: CreateTaskRequestBodyType) => {
  return axiosClient
    .post<ApiRes<CreateTaskResponseBodyType>>(`tasks/createTask`, payload)
    .then((response) => response.data);
};

export const editTask = (payload: editTaskRequestBodyType) => {
  return axiosClient
    .post<ApiRes<editTaskResponseBodyType>>(`tasks/editTask`, payload)
    .then((response) => response.data);
};

export const deleteTask = (payload: deleteTaskRequestBodyType) => {
  return axiosClient
    .post<ApiRes<deleteTaskResponseBodyType>>(`tasks/deleteTask`, payload)
    .then((response) => response.data);
};
