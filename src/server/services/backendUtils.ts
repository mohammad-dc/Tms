import { ServerResponse } from "http";

export const setCacheHeaders = (
  res: ServerResponse,
  maxAge: number,
  staleRevalidate: number | undefined
) => {
  let header = `public, s-maxage=${maxAge}`;
  if (staleRevalidate) header += `, stale-while-revalidate=${staleRevalidate}`;
  res.setHeader("Cache-Control", header);
};
