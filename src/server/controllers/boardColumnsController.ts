import {
  CreateBoardColumnRequestBodyType,
  CreateBoardColumnResponseBodyType,
  DeleteBoardColumnRequestBodyType,
  DeleteBoardColumnResponseBodyType,
} from "../../types/middlewares/boardColumns";
import { middlewareType } from "../../types/shared";
import { BoardColumns } from "../models/boardColumnsModel";
import responses from "../services/apiResponse";

export const deleteBoardColumn: middlewareType<
  DeleteBoardColumnRequestBodyType,
  DeleteBoardColumnResponseBodyType
> = async (req, res) => {
  try {
    const { boardColumnId } = req.body;

    const _boardColumn = new BoardColumns();

    await _boardColumn.deleteBoardColumn(boardColumnId);

    return responses.deleteSuccess(res);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createBoardColumn: middlewareType<
  CreateBoardColumnRequestBodyType,
  CreateBoardColumnResponseBodyType
> = async (req, res) => {
  try {
    const { boardId, name } = req.body;

    const _boardColumnModel = new BoardColumns();

    const boardColumn = await _boardColumnModel.createBoardColumn({
      boardId,
      name,
    });
    return responses.success(res, boardColumn);
  } catch (error: any) {
    throw new Error(error);
  }
};
