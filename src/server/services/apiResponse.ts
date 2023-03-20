import { ExtendedNextApiResponse } from "../../types/shared";

//200 family
const OK = 200;
const CREATED = 201;
const ACCEPTED = 202;

//400 family
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
// const NOT_FOUND = 404;
const NOT_ACCEPTABLE = 406;

//500 family
const INTERNAL_SERVER = 500;
// const SERVER_BUSY = 503;

const responses = {
  endSequence: "_H_SENT_",

  //* 400 family
  customError: (res: ExtendedNextApiResponse, error: string) => {
    res.status(BAD_REQUEST).json({
      success: false,
      message: error,
      response: {},
    });
    return responses.endSequence;
  },
  //*500 family
  somethingWentWrong: (res: ExtendedNextApiResponse) => {
    res.status(INTERNAL_SERVER).json({
      success: false,
      message: "global_error",
      response: {},
    });
    return responses.endSequence;
  },
  //*200 family
  success: (res: ExtendedNextApiResponse, response: any) => {
    res.status(OK).json({
      success: true,
      response,
    });
    return responses.endSequence;
  },
  updatedSuccess: (res: ExtendedNextApiResponse, response: any) => {
    res.status(ACCEPTED).json({
      success: true,
      response,
      message: "updated_successfully",
    });
    return responses.endSequence;
  },
  createdSuccess: (res: ExtendedNextApiResponse, response: any) => {
    res.status(CREATED).json({
      success: true,
      response,
      message: "created_successfully",
    });
    return responses.endSequence;
  },

  deleteSuccess: (res: ExtendedNextApiResponse) => {
    res.status(ACCEPTED).json({
      success: true,
      message: "deleted_successfully",
      response: {},
    });
    return responses.endSequence;
  },
};

export default responses;
