import {
  getCurrentUserInfo,
  login,
  register,
} from "../../../server/controllers/usersController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

const endpoints: endPointsType = {
  login: {
    middleWares: [login],
  },
  register: {
    middleWares: [register],
  },
  getCurrentUserInfo: {
    method: "GET",
    middleWares: [getCurrentUserInfo],
  },
};

export default apiHandler(endpoints);
