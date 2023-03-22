import { createContext, useContext, useState } from "react";
import { boardContextType } from "../types/context";
import { BoardType } from "../types/middlewares/boards";

const boardContextDefaultValues: boardContextType = {
  boards: [],
  activeBoard: null,
  saveActiveBoard: () => {},
  insertMany: () => {},
  insertOne: () => {},
};

const BoardContext = createContext<boardContextType>(boardContextDefaultValues);

export function useBoard() {
  return useContext(BoardContext);
}

export function BoardsProvider({ children }: { children: React.ReactNode }) {
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [activeBoard, setActiveBoard] = useState<number | null>(null);

  const insertOne = (board: BoardType) => {
    setBoards([...boards, board]);
  };

  const insertMany = (boards: BoardType[]) => {
    setBoards(boards);
  };

  const saveActiveBoard = (boardId: number) => {
    setActiveBoard(boardId);
  };

  const value = {
    boards,
    activeBoard,
    saveActiveBoard,
    insertOne,
    insertMany,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
