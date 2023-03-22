export type BoardsPageProps = {};

export type SubtasksProps = {
  id: number;
  isCompleted: boolean;
  title: string;
};

export type TaskProps = {
  id: number;
  title: string;
  description: string;
  cCount: number;
  stCount: number;
  boardCols: number;
  subtasks: SubtasksProps[];
};

export type BoardColumnProps = {
  id: number;
  name: string;
  tasks: TaskProps[];
};

export type BoardProps = {
  id: number;
  name: string;
  boardColumns: BoardColumnProps[];
};
export type BoardPageProps = {
  result: BoardProps;
};
