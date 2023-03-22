import { BoardType } from "./middlewares/boards";

export type boardContextType = {
  boards: BoardType[];
  activeBoard: number | null;
  saveActiveBoard: (_e?: any) => void;
  insertMany: (_e?: any) => void;
  insertOne: (_e?: any) => void;
};
