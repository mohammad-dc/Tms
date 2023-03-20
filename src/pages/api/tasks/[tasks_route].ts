import {
  createTask,
  deleteTask,
  editTask,
} from "../../../server/controllers/tasksController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

const endpoints: endPointsType = {
  createTask: {
    middleWares: [createTask],
  },
  editTask: {
    middleWares: [editTask],
  },
  deleteTask: {
    middleWares: [deleteTask],
  },
};

export default apiHandler(endpoints);
