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
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               subtaskId:
   *                 type: number
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
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               subtaskId:
   *                 type: number
   *               complete:
   *                 type: boolean
   *     responses:
   *       200:
   *         description: hello world
   */
  completeSubtask: {
    middleWares: [completeSubtask],
  },
};

export default apiHandler(endpoints);
