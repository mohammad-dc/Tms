//* delete endpoint
export type DeleteBoardColumnRequestBodyType = {
  boardColumnId: number;
};

export type DeleteBoardColumnResponseBodyType = {
  success: boolean;
  message: string;
};
