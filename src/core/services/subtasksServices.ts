import {
  CompleteSubtaskRequestBodyType,
  CompleteSubtaskResponseBodyType,
  DeleteSubtaskRequestBodyType,
  DeleteSubtaskResponseBodyType,
} from "../../types/middlewares/subtasks";
import { ApiRes } from "../../types/shared";
import { axiosClient } from "./axiosService";

export const deleteSubtask = (payload: DeleteSubtaskRequestBodyType) => {
  return axiosClient
    .post<ApiRes<DeleteSubtaskResponseBodyType>>(
      `subTasks/deleteSubtask`,
      payload
    )
    .then((response) => response.data);
};

export const completeSubtask = (payload: CompleteSubtaskRequestBodyType) => {
  return axiosClient
    .post<ApiRes<CompleteSubtaskResponseBodyType>>(
      `subTasks/completeSubtask`,
      payload
    )
    .then((response) => response.data);
};
