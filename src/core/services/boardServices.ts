import {
  CreateBoardBodyRequestType,
  CreateBoardBodyResponseType,
  DeleteBoardRequestBodyType,
  DeleteBoardResponseBodyType,
  EditBoardBodyRequestType,
  EditBoardBodyResponseType,
  GetAllBoardsBodyResponseType,
  RetrieveBoardRequestBodyType,
  RetrieveBoardResponseBodyType,
} from "../../types/middlewares/boards";
import { ApiRes } from "../../types/shared";
import { axiosClient } from "./axiosService";

export const createBoard = (payload: CreateBoardBodyRequestType) => {
  return axiosClient
    .post<ApiRes<CreateBoardBodyResponseType>>(`/boards/createBoard`, payload)
    .then((response) => response.data);
};

export const retrieveBoard = (payload: RetrieveBoardRequestBodyType) => {
  return axiosClient
    .post<ApiRes<RetrieveBoardResponseBodyType>>(
      `/boards/retrieveBoard`,
      payload
    )
    .then((response) => response.data);
};

export const editBoard = (payload: EditBoardBodyRequestType) => {
  return axiosClient
    .post<ApiRes<EditBoardBodyResponseType>>(`/boards/editBoard`, payload)
    .then((response) => response.data);
};

export const getAllBoards = () => {
  return axiosClient
    .get<ApiRes<GetAllBoardsBodyResponseType>>(`/boards/getAllBoards`)
    .then((response) => response.data);
};

export const deleteBoard = (payload: DeleteBoardRequestBodyType) => {
  return axiosClient
    .post<ApiRes<DeleteBoardResponseBodyType>>(`/boards/deleteBoard`, payload)
    .then((response) => response.data);
};
