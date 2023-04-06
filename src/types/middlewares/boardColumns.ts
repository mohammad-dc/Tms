import { BoardColumnProps } from "../pageProps";

//* delete endpoint
export type DeleteBoardColumnRequestBodyType = {
  boardColumnId: number;
};

export type DeleteBoardColumnResponseBodyType = {
  success: boolean;
  message: string;
};

//* create endpoint
export type CreateBoardColumnRequestBodyType = {
  boardId: number;
  name: string;
};

export type CreateBoardColumnResponseBodyType = {
  success: boolean;
  message: string;
  response: BoardColumnProps;
};
