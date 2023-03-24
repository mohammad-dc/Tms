import { BaseModel } from "./baseModel";

export class Subtasks extends BaseModel {
  constructor() {
    super();
  }

  getModel() {
    return this._client.subTasks;
  }

  async createManySubtasks(subTasks: { title: string; taskId: number }[]) {
    try {
      await this.getModel().createMany({ data: subTasks });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getSubtasksByTaskId(taskId: number) {
    try {
      return await this.getModel().findMany({
        where: { taskId },
        select: { id: true, isCompleted: true, title: true },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteSubtask(id: number) {
    try {
      return await this.getModel().delete({ where: { id } });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async completeSubtask(subtaskId: number, complete: boolean) {
    try {
      await this.getModel().update({
        where: { id: subtaskId },
        data: {
          isCompleted: complete,
        },
      });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
