//* global types
type SubtaskType = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TaskType = {
  id: number;
  title: string;
  description: string;
  boardCols: number;
  stCount: number;
  cCount: number;
  subtasks: SubtaskType;
};

//* create task
export type CreateTaskRequestBodyType = {
  boardColumnId: number;
  title: string;
  description: string;
  subtasks: string[];
};

export type CreateTaskResponseBodyType = {
  success: boolean;
  message: string;
  task: TaskType;
};

//* edit task
export type editTaskRequestBodyType = {
  taskId: number;
  title: string;
  description: string;
  subtasks: string[];
};

export type editTaskResponseBodyType = {
  success: boolean;
  message: string;
  response: TaskType;
};

//* delete task
export type deleteTaskRequestBodyType = {
  taskId: number;
};

export type deleteTaskResponseBodyType = {
  success: boolean;
  message: string;
};
