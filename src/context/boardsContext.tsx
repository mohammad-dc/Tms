import { createContext, useContext, useState } from "react";
import { boardContextType } from "../types/context";
import { BoardType } from "../types/middlewares/boards";
import { BoardProps, TaskProps } from "../types/pageProps";

const boardContextDefaultValues: boardContextType = {
  boards: [],
  activeBoard: undefined,
  saveActiveBoard: () => {},
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

  const insertMany = (boards: BoardType[]) => {
    setBoards(boards);
  };

  const saveActiveBoard = (board: BoardProps) => {
    setActiveBoard(board);
  };

  const insertTask = (task: TaskProps) => {
    const newColumnsList = activeBoard?.boardColumns;
    if (newColumnsList) {
      for (let _col of newColumnsList) {
        if (_col.id === task.boardCols) _col.tasks.push(task);
      }
      setActiveBoard({ ...activeBoard, boardColumns: newColumnsList });
    }
  };

  const value = {
    boards,
    activeBoard,
    saveActiveBoard,
    insertTask,
    insertOne,
    insertMany,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
