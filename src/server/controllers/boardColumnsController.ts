import {
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

    responses.deleteSuccess(res);
  } catch (error: any) {
    throw new Error(error);
  }
};
