//* delete endpoint
export type DeleteSubtaskRequestBodyType = {
  subtaskId: number;
};

export type DeleteSubtaskResponseBodyType = {
  success: boolean;
  message: string;
};
