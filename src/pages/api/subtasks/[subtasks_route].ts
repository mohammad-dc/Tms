import {
  completeSubtask,
  deleteSubtask,
} from "../../../server/controllers/subtasksController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

export const endpoints: endPointsType = {
  deleteSubtask: {
    middleWares: [deleteSubtask],
  },
  completeSubtask: {
    middleWares: [completeSubtask],
  },
};

export default apiHandler(endpoints);
