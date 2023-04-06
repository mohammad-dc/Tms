import { CreateBoardBodyRequestType } from "../../types/middlewares/boards";
import { BaseModel } from "./baseModel";

export class Boards extends BaseModel {
  constructor() {
    super();
  }

  getModel() {
    return this._client.boards;
  }

  async createBoard(name: string, userId: number) {
    try {
      const board = await this.getModel().create({
        data: { name, userId },
      });
      return board;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getOneBoard(id: number) {
    try {
      const board = await this.getModel().findFirst({
        where: { id },
        select: {
          id: true,
          name: true,
          boardColumns: {
            select: {
              id: true,
              name: true,
              tasks: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                  cCount: true,
                  stCount: true,
                  boardCols: true,
                  subTasks: {
                    select: { id: true, isCompleted: true, title: true },
                  },
                },
              },
            },
          },
        },
      });

      return board;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getAllBoards() {
    try {
      const boards = await this.getModel().findMany();
      return boards;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async editBoard(id: number, name: string) {
    try {
      await this.getModel().update({ where: { id }, data: { name } });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteBoard(id: number) {
    try {
      await this.getModel().delete({ where: { id } });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
