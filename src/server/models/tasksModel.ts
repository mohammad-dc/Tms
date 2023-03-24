import { BaseModel } from "./baseModel";

export class Tasks extends BaseModel {
  constructor() {
    super();
  }

  getModel() {
    return this._client.tasks;
  }

  async createTask(
    description: string,
    title: string,
    boardCols: number,
    stCount: number
  ) {
    try {
      return await this.getModel().create({
        data: {
          description,
          title,
          boardCols,
          stCount,
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getOneTaskById(id: number) {
    try {
      return await this.getModel().findFirst({
        where: { id },
        select: {
          title: true,
          description: true,
          boardCols: true,
          cCount: true,
          stCount: true,
          id: true,
          subTasks: {
            select: {
              id: true,
              isCompleted: true,
              title: true,
            },
          },
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async editTask(id: number, description: string, title: string) {
    try {
      await this.getModel().update({
        where: { id },
        data: { title, description },
      });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteTask(id: number) {
    try {
      await this.getModel().delete({ where: { id } });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async inCDecSubtaskCount(mode: "inc" | "dec", taskId: number, count: number) {
    try {
      await this.getModel().update({
        where: { id: taskId },
        data: {
          cCount: mode === "inc" ? { increment: count } : { decrement: count },
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async changeBoardColumn(boardCols: number, taskId: number) {
    try {
      await this.getModel().update({
        where: { id: taskId },
        data: {
          boardCols,
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
