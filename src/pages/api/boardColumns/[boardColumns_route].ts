import {
  createBoardColumn,
  deleteBoardColumn,
} from "../../../server/controllers/boardColumnsController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

const endpoints: endPointsType = {
  /**
   * @swagger
   * /api/boardColumns/deleteBoardColumn:
   *   post:
   *     tags:
   *     - Board Columns
   *     description: Delete board Column
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
   *     responses:
   *       200:
   *         description: hello world
   */
  deleteBoardColumn: {
    middleWares: [deleteBoardColumn],
  },
  /**
   * @swagger
   * /api/boardColumns/createBoardColumn:
   *   post:
   *     tags:
   *     - Board Columns
   *     description: Create new board Column
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
   *               boardId:
   *                 type: number
   *               name:
   *                 type: string
   *     responses:
   *       200:
   *         description: hello world
   */
  createBoardColumn: {
    middleWares: [createBoardColumn],
  },
};

export default apiHandler(endpoints);
