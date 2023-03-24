import {
  DeleteSubtaskRequestBodyType,
  DeleteSubtaskResponseBodyType,
} from "../../types/middlewares/subTasks";
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
