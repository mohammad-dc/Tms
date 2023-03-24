import {
  ChangeBoardColTaskRequestBodyType,
  ChangeBoardColTaskResponseBodyType,
  CreateTaskRequestBodyType,
  CreateTaskResponseBodyType,
  deleteTaskRequestBodyType,
  deleteTaskResponseBodyType,
  editTaskRequestBodyType,
  editTaskResponseBodyType,
} from "../../types/middlewares/tasks";
import { middlewareType } from "../../types/shared";
import { Subtasks } from "../models/subtasksModel";
import { Tasks } from "../models/tasksModel";
import responses from "../services/apiResponse";

export const createTask: middlewareType<
  CreateTaskRequestBodyType,
  CreateTaskResponseBodyType
> = async (req, res) => {
  try {
    const { boardColumnId, description, subTasks, title } = req.body;

    const _taskModel = new Tasks();
    const _subtaskModel = new Subtasks();

    const task = await _taskModel.createTask(
      description,
      title,
      boardColumnId,
      subTasks.length
    );
    if (subTasks.length > 0) {
      const _cols = [];
      for (let col of subTasks) {
        _cols.push({ title: col, taskId: task.id });
      }

      await _subtaskModel.createManySubtasks(_cols);
    }

    const _subTasks = await _subtaskModel.getSubtasksByTaskId(task.id);
    responses.createdSuccess(res, { ...task, subTasks: _subTasks });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const editTask: middlewareType<
  editTaskRequestBodyType,
  editTaskResponseBodyType
> = async (req, res) => {
  try {
    const { description, subTasks, taskId, title } = req.body;

    const _taskModel = new Tasks();
    const _subtaskModel = new Subtasks();

    await _taskModel.editTask(taskId, description, title);

    if (subTasks.length > 0) {
      const _cols = [];
      for (let col of subTasks) {
        _cols.push({ title: col, taskId });
      }
      await _subtaskModel.createManySubtasks(_cols);
    }

    const task = _taskModel.getOneTaskById(taskId);
    responses.updatedSuccess(res, task);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTask: middlewareType<
  deleteTaskRequestBodyType,
  deleteTaskResponseBodyType
> = async (req, res) => {
  try {
    const { taskId } = req.body;
    const _taskModel = new Tasks();
    await _taskModel.deleteTask(taskId);
    responses.deleteSuccess(res);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const changeBoardColumn: middlewareType<
  ChangeBoardColTaskRequestBodyType,
  ChangeBoardColTaskResponseBodyType
> = async (req, res) => {
  try {
    const { boardColumnId, taskId } = req.body;

    const _taskModel = new Tasks();

    await _taskModel.changeBoardColumn(boardColumnId, taskId);
    responses.updatedSuccess(res, {});
  } catch (error: any) {
    throw new Error(error);
  }
};
