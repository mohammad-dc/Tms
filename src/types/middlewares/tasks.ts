import { TaskProps } from "../pageProps";

//* create task
export type CreateTaskRequestBodyType = {
  boardColumnId: number;
  title: string;
  description: string;
  subTasks: string[];
};

export type CreateTaskResponseBodyType = {
  success: boolean;
  message: string;
  task: TaskProps;
};

//* edit task
export type editTaskRequestBodyType = {
  taskId: number;
  title: string;
  description: string;
  subTasks: string[];
};

export type editTaskResponseBodyType = {
  success: boolean;
  message: string;
  response: TaskProps;
};

//* delete task
export type deleteTaskRequestBodyType = {
  taskId: number;
};

export type deleteTaskResponseBodyType = {
  success: boolean;
  message: string;
};
