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
   *               boardColumnId:
   *                 type: number
   *               title:
   *                 type: string
   *               description:
   *                 type: string
   *               subTasks:
   *                 type: array
   *                 required: true
   *                 items:
   *                    type: string
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
   *               taskId:
   *                 type: number
   *               title:
   *                 type: string
   *               description:
   *                 type: string
   *               subTasks:
   *                 type: array
   *                 required: true
   *                 items:
   *                    type: string
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
   *               taskId:
   *                 type: number
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
   *               taskId:
   *                 type: number
   *               boardColumnId:
   *                 type: number
   *     responses:
   *       200:
   *         description: hello world
   */
  changeBoardColumn: {
    middleWares: [changeBoardColumn],
  },
};

export default apiHandler(endpoints);
