import { deleteSubtask } from "../../../server/controllers/subTasksController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

export const endpoints: endPointsType = {
  deleteSubtask: {
    middleWares: [deleteSubtask],
  },
};

export default apiHandler(endpoints);
