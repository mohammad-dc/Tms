import {
  DeleteBoardColumnRequestBodyType,
  DeleteBoardColumnResponseBodyType,
} from "../../types/middlewares/boardColumns";
import { ApiRes } from "../../types/shared";
import { axiosClient } from "./axiosService";

export const deleteBoardColumn = (
  payload: DeleteBoardColumnRequestBodyType
) => {
  return axiosClient
    .post<ApiRes<DeleteBoardColumnResponseBodyType>>(
      `boardColumns/deleteBoardColumn`,
      payload
    )
    .then((response) => response.data);
};
