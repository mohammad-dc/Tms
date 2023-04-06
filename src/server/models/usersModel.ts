import { comparePassword } from "../helpers/bcryptPassword";
import { BaseModel } from "./baseModel";

export class Users extends BaseModel {
  constructor() {
    super();
  }

  getModal() {
    return this._client.users;
  }

  async loginUser(email: string, password: string) {
    try {
      const user = await this.getModal().findUnique({ where: { email } });
      if (user) {
        await comparePassword(password, user.password);
        return user;
      }
      return null;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async registerUser(email: string, password: string) {
    try {
      await this.getModal().create({ data: { email, password } });
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getUserInfo(userId: number) {
    try {
      return await this.getModal().findUnique({
        where: { id: userId },
        select: {
          id: true,
          boards: true,
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
