import { BaseModel } from "./baseModel";

export class Tasks extends BaseModel {
  constructor() {
    super();
  }

  getModel() {
    return this._client.tasks;
  }

  async createTask(description: string, title: string, boardCols: number) {
    try {
      return await this.getModel().create({
        data: {
          description,
          title,
          boardCols,
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
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
