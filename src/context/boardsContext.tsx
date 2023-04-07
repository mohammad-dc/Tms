import { createContext, useContext, useState } from "react";
import { boardContextType } from "../types/context";
import { BoardType } from "../types/middlewares/boards";
import {
  BoardColumnProps,
  BoardProps,
  SubtasksProps,
  TaskProps,
} from "../types/pageProps";

const boardContextDefaultValues: boardContextType = {
  boards: [],
  activeBoard: undefined,
  saveActiveBoard: () => {},
  insertColumn: () => {},
  insertSubtasks: () => {},
  insertTask: () => {},
  insertMany: () => {},
  insertOne: () => {},
};

const BoardContext = createContext<boardContextType>(boardContextDefaultValues);

export function useBoard() {
  return useContext(BoardContext);
}

export function BoardsProvider({ children }: { children: React.ReactNode }) {
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [activeBoard, setActiveBoard] = useState<BoardProps>();

  const insertOne = (board: BoardType) => {
    setBoards([...boards, board]);
  };

  const insertColumn = (boardColumn: BoardColumnProps) => {
    const columns = activeBoard?.boardColumns;
    if (columns) {
      columns.push(boardColumn);
      setActiveBoard({ ...activeBoard, boardColumns: columns });
    }
  };

  const insertMany = (boards: BoardType[]) => {
    setBoards(boards);
  };

  const saveActiveBoard = (board: BoardProps) => {
    setActiveBoard(board);
  };

  const insertTask = (task: TaskProps) => {
    const columns = activeBoard?.boardColumns;
    if (columns) {
      for (let _col of columns) {
        if (_col.id === task.boardCols) _col.tasks.push(task);
      }
      setActiveBoard({ ...activeBoard, boardColumns: columns });
    }
  };

  const insertSubtasks = (subtasks: SubtasksProps[], taskId: number) => {
    const columns = activeBoard?.boardColumns;
    if (columns) {
      for (let _col of columns) {
        for (let _task of _col.tasks) {
          if (_task.id === taskId) {
            _task.subTasks = subtasks;
          }
        }
      }
      console.log({ columns });
      setActiveBoard({ ...activeBoard, boardColumns: columns });
    }
  };

  const value = {
    boards,
    activeBoard,
    saveActiveBoard,
    insertColumn,
    insertSubtasks,
    insertTask,
    insertOne,
    insertMany,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
