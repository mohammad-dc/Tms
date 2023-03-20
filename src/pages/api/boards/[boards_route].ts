import {
  createBoard,
  deleteBoard,
  editBoard,
  getAllBoards,
  retrieveBoard,
} from "../../../server/controllers/boardsController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

const endpoints: endPointsType = {
  createBoard: {
    middleWares: [createBoard],
  },
  editBoard: {
    middleWares: [editBoard],
  },
  retrieveBoard: {
    middleWares: [retrieveBoard],
  },
  getAllBoards: {
    method: "GET",
    middleWares: [getAllBoards],
  },
  deleteBoard: {
    middleWares: [deleteBoard],
  },
};

export default apiHandler(endpoints);
