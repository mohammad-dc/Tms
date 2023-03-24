import { BoardType } from "./middlewares/boards";
import { BoardProps, TaskProps } from "./pageProps";

export type boardContextType = {
  boards: BoardType[];
  activeBoard?: BoardProps;
  saveActiveBoard: (_e: BoardProps) => void;
  insertTask: (_e: TaskProps) => void;
  insertMany: (_e?: any) => void;
  insertOne: (_e?: any) => void;
};
