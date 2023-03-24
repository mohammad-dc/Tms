//* delete endpoint
export type DeleteSubtaskRequestBodyType = {
  subtaskId: number;
};

export type DeleteSubtaskResponseBodyType = {
  success: boolean;
  message: string;
};

//* complete endpoint
export type CompleteSubtaskRequestBodyType = {
  subtaskId: number;
  complete: boolean;
};

export type CompleteSubtaskResponseBodyType = {
  success: boolean;
  message: string;
};
