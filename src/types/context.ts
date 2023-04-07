import { BoardType } from "./middlewares/boards";
import {
  BoardColumnProps,
  BoardProps,
  SubtasksProps,
  TaskProps,
} from "./pageProps";

export type boardContextType = {
  boards: BoardType[];
  activeBoard?: BoardProps;
  saveActiveBoard: (_e: BoardProps) => void;
  insertColumn: (_e: BoardColumnProps) => void;
  insertSubtasks: (_e: SubtasksProps[], _t: number) => void;
  insertTask: (_e: TaskProps) => void;
  insertMany: (_e?: any) => void;
  insertOne: (_e?: any) => void;
};
