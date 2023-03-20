import {
  DeleteSubtaskRequestBodyType,
  DeleteSubtaskResponseBodyType,
} from "../../types/middlewares/subtasks";
import { middlewareType } from "../../types/shared";
import { Subtasks } from "../models/subtasksModel";
import responses from "../services/apiResponse";

export const deleteSubtask: middlewareType<
  DeleteSubtaskRequestBodyType,
  DeleteSubtaskResponseBodyType
> = async (req, res) => {
  try {
    const { subtaskId } = req.body;

    const _subtaskModel = new Subtasks();

    await _subtaskModel.deleteSubtask(subtaskId);

    responses.deleteSuccess(res);
  } catch (error: any) {
    throw new Error(error);
  }
};
