import { withSentry } from "@sentry/nextjs";
import { NextApiHandler } from "@sentry/nextjs/types/server/types";
import { endPointsType, ExtendedNextApiRequest } from "../../types/shared";
import { errorHandler } from "./apiMiddlewares";
import responses from "./apiResponse";

export const apiHandler: (_eP: endPointsType) => NextApiHandler = (
  endPoints
) => {
  return withSentry(async (req, res) => {
    try {
      if (req.url === undefined) throw new Error(`URL is empty`);

      let endPoint: string = req.url.split("?")[0].split("/").at(-1) || "";
      if (
        !endPoint ||
        !endPoints[endPoint] ||
        (endPoints[endPoint].method || "POST") != req.method
      )
        throw new Error(`Not Found: [${req.method}] ${req.url}`);

      for (const middleWare of endPoints[endPoint].middleWares) {
        if (
          (await middleWare(req as ExtendedNextApiRequest, res)) ==
          responses.endSequence
        )
          return res.end();
      }

      // * No headers sent from any middleware
      if (!res.headersSent) throw new Error(`No Headers Sent: ${req.url}`);
    } catch (err: any) {
      // Global error handler
      await errorHandler(err, res);
    }
  });
};
