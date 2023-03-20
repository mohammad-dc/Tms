import { BaseModel } from "./baseModel";

export class BoardColumns extends BaseModel {
  constructor() {
    super();
  }

  getModel() {
    return this._client.boardColumns;
  }

  async createManyColumns(columns: { name: string; boardId: number }[]) {
    try {
      await this.getModel().createMany({ data: columns });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteBoardColumn(id: number) {
    try {
      await this.getModel().delete({ where: { id } });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
