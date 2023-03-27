import {
  changeBoardColumn,
  createTask,
  deleteTask,
  editTask,
} from "../../../server/controllers/tasksController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

const endpoints: endPointsType = {
  /**
   * @swagger
   * /api/tasks/createTask:
   *   post:
   *     tags:
   *     - Tasks
   *     description: Create new task
   *     responses:
   *       200:
   *         description: hello world
   */
  createTask: {
    middleWares: [createTask],
  },
  /**
   * @swagger
   * /api/tasks/editTask:
   *   post:
   *     tags:
   *     - Tasks
   *     description: Edit task
   *     responses:
   *       200:
   *         description: hello world
   */
  editTask: {
    middleWares: [editTask],
  },
  /**
   * @swagger
   * /api/tasks/deleteTask:
   *   post:
   *     tags:
   *     - Tasks
   *     description: Delete task
   *     responses:
   *       200:
   *         description: hello world
   */
  deleteTask: {
    middleWares: [deleteTask],
  },
  /**
   * @swagger
   * /api/tasks/changeBoardColumn:
   *   post:
   *     tags:
   *     - Tasks
   *     description: Change Board Column for a task
   *     responses:
   *       200:
   *         description: hello world
   */
  changeBoardColumn: {
    middleWares: [changeBoardColumn],
  },
};

export default apiHandler(endpoints);

// *     requestBody:
// *       content:
// *         application/json:
// *           schema:
// *             type: object:
// *               properties:
// *                 boardColumnId:
// *                   type: number
