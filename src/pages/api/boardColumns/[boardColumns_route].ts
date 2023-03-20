import { deleteBoardColumn } from "../../../server/controllers/boardColumnsController";
import { apiHandler } from "../../../server/services/apiHandler";
import { endPointsType } from "../../../types/shared";

const endpoints: endPointsType = {
  deleteBoardColumn: {
    middleWares: [deleteBoardColumn],
  },
};

export default apiHandler(endpoints);
