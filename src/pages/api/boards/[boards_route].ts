import {
  createBoard,
  deleteBoard,
  editBoard,
  getAllBoards,
  retrieveBoard,
} from "../../../server/controllers/boardsController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

const endpoints: endPointsType = {
  /**
   * @swagger
   * /api/boards/createBoard:
   *   post:
   *     tags:
   *     - Boards
   *     description: Create Board
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
   *               name:
   *                 type: string
   *               columns:
   *                 type: array
   *                 required: false
   *                 items:
   *                    type: string
   *     responses:
   *       200:
   *         description: hello world
   */
  createBoard: {
    middleWares: [createBoard],
  },
  /**
   * @swagger
   * /api/boards/editBoard:
   *   post:
   *     tags:
   *     - Boards
   *     description: Edit Board
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
   *               columns:
   *                 type: array
   *                 required: false
   *                 items:
   *                    type: string
   *     responses:
   *       200:
   *         description: hello world
   */
  editBoard: {
    middleWares: [editBoard],
  },
  /**
   * @swagger
   * /api/boards/retrieveBoard:
   *   post:
   *     tags:
   *     - Boards
   *     description: Retrieve Board
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
   *     responses:
   *       200:
   *         description: hello world
   */
  retrieveBoard: {
    middleWares: [retrieveBoard],
  },
  /**
   * @swagger
   * /api/boards/getAllBoards:
   *   get:
   *     tags:
   *     - Boards
   *     description: Get All Board
   *     responses:
   *       200:
   *         description: hello world
   */
  getAllBoards: {
    method: "GET",
    middleWares: [getAllBoards],
  },
  /**
   * @swagger
   * /api/boards/deleteBoard:
   *   post:
   *     tags:
   *     - Boards
   *     description: Delete Board
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
   *               id:
   *                 type: number
   *     responses:
   *       200:
   *         description: hello world
   */
  deleteBoard: {
    middleWares: [deleteBoard],
  },
};

export default apiHandler(endpoints);
