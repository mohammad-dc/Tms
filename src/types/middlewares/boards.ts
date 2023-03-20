//* boards types
export type BoardType = { id: number; name: string };

//* create endpoint
export type CreateBoardBodyRequestType = {
  name: string;
  columns: string[];
};

export type CreateBoardBodyResponseType = {
  success: boolean;
  message: string;
  response: { result: BoardType };
};

//* retrieve endpoint
export type RetrieveBoardRequestBodyType = {
  boardId: number;
};

export type RetrieveBoardResponseBodyType = {
  success: true;
  response: any;
};

//* get endpoint
export type GetAllBoardsBodyResponseType = {
  success: boolean;
  response: { results: BoardType[] };
};

//* edit endpoint
export type EditBoardBodyRequestType = {
  boardId: number;
  columns: string[];
  name: string;
};

export type EditBoardBodyResponseType = Pick<
  CreateBoardBodyResponseType,
  "message" | "response" | "success"
>;

//* delete endpoint
export type DeleteBoardRequestBodyType = {
  id: number;
};

export type DeleteBoardResponseBodyType = {
  success: boolean;
  message: string;
};
