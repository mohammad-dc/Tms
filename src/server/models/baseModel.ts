import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient;

export function getPrismaClient() {
  return prismaClient || new PrismaClient();
}

export class BaseModel {
  _client = getPrismaClient();
  constructor(private _modelParams?: { allowedUserFields: string[] }) {}

  async transaction(queries: []) {
    try {
      return await this._client.$transaction(queries);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  keepOnlyUserFields(data: any) {
    try {
      data = { ...data }; // So we don't mutate the original object.
      if (!this._modelParams?.allowedUserFields?.length) return data;
      for (const field of Object.keys(data)) {
        if (!this._modelParams.allowedUserFields.includes(field))
          delete data[field];
      }
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
