import { deleteBoardColumn } from "../../../server/controllers/boardColumnsController";
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
};

export default apiHandler(endpoints);
