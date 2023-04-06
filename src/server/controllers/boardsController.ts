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
import { UserSession, middlewareType } from "../../types/shared";
import { BoardColumns } from "../models/boardColumnsModel";
import { Boards } from "../models/boardsModel";
import { getUserSessionInfoIfLoggedIn } from "../services/apiMiddlewares";
import responses from "../services/apiResponse";

export const createBoard: middlewareType<
  CreateBoardBodyRequestType,
  CreateBoardBodyResponseType
> = async (req, res) => {
  try {
    const { columns, name } = req.body;

    const token = (await getUserSessionInfoIfLoggedIn(
      req.cookies.token
    )) as UserSession;

    //* db model instance
    const _boardModel = new Boards();
    const _boardColumnModel = new BoardColumns();

    const board = await _boardModel.createBoard(name, token.userId);

    if (columns.length > 0) {
      const _cols = [];
      for (let col of columns) {
        _cols.push({ name: col, boardId: board.id });
      }
      await _boardColumnModel.createManyColumns(_cols);
    }

    return responses.createdSuccess(res, board);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const retrieveBoard: middlewareType<
  RetrieveBoardRequestBodyType,
  RetrieveBoardResponseBodyType
> = async (req, res) => {
  try {
    const { boardId } = req.body;

    const _boardModel = new Boards();

    const board = await _boardModel.getOneBoard(boardId);
    return responses.success(res, board);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllBoards: middlewareType<
  unknown,
  GetAllBoardsBodyResponseType
> = async (req, res) => {
  try {
    //* db model instance
    const _boardModel = new Boards();
    const boards = await _boardModel.getAllBoards();
    return responses.success(res, boards);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const editBoard: middlewareType<
  EditBoardBodyRequestType,
  EditBoardBodyResponseType
> = async (req, res) => {
  try {
    const { boardId, columns, name } = req.body;

    //* db model instance
    const _boardModel = new Boards();
    const _boardColumnModel = new BoardColumns();

    await _boardModel.editBoard(boardId, name);

    if (columns.length > 0) {
      const _cols = [];
      for (let col of columns) {
        _cols.push({ name: col, boardId });
      }
      await _boardColumnModel.createManyColumns(_cols);
    }

    const board = _boardModel.getOneBoard(boardId);

    return responses.updatedSuccess(res, board);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteBoard: middlewareType<
  DeleteBoardRequestBodyType,
  DeleteBoardResponseBodyType
> = async (req, res) => {
  try {
    const { id } = req.body;

    //* db model instance
    const _boardModel = new Boards();

    await _boardModel.deleteBoard(id);

    return responses.deleteSuccess(res);
  } catch (error: any) {
    throw new Error(error);
  }
};
