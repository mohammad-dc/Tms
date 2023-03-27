import {
  completeSubtask,
  deleteSubtask,
} from "../../../server/controllers/subtasksController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

export const endpoints: endPointsType = {
  /**
   * @swagger
   * /api/subtasks/deleteSubtask:
   *   post:
   *     tags:
   *     - Subtasks
   *     description: Delete Subtask
   *     responses:
   *       200:
   *         description: hello world
   */
  deleteSubtask: {
    middleWares: [deleteSubtask],
  },
  /**
   * @swagger
   * /api/subtasks/completeSubtask:
   *   post:
   *     tags:
   *     - Subtasks
   *     description: Complete Subtask
   *     responses:
   *       200:
   *         description: hello world
   */
  completeSubtask: {
    middleWares: [completeSubtask],
  },
};

export default apiHandler(endpoints);
