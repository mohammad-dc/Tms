import {
  CompleteSubtaskRequestBodyType,
  CompleteSubtaskResponseBodyType,
  DeleteSubtaskRequestBodyType,
  DeleteSubtaskResponseBodyType,
} from "../../types/middlewares/subtasks";
import { middlewareType } from "../../types/shared";
import { Subtasks } from "../models/subtasksModel";
import { Tasks } from "../models/tasksModel";
import responses from "../services/apiResponse";

export const deleteSubtask: middlewareType<
  DeleteSubtaskRequestBodyType,
  DeleteSubtaskResponseBodyType
> = async (req, res) => {
  try {
    const { subtaskId } = req.body;

    const _subtaskModel = new Subtasks();
    const _taskModel = new Tasks();

    const subtask = await _subtaskModel.deleteSubtask(subtaskId);

    await _taskModel.inCDecSubtaskCount("dec", subtask.taskId, 1);

    responses.deleteSuccess(res);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const completeSubtask: middlewareType<
  CompleteSubtaskRequestBodyType,
  CompleteSubtaskResponseBodyType
> = async (req, res) => {
  try {
    const { complete, subtaskId } = req.body;

    const _subtaskModel = new Subtasks();

    await _subtaskModel.completeSubtask(subtaskId, complete);

    responses.updatedSuccess(res, {});
  } catch (error: any) {
    throw new Error(error);
  }
};
