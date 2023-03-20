import { useEffect } from "react";

export const useInitDestroy = (
  initCb?: () => Promise<void>,
  destroyCb?: () => Promise<void>,
  deps: any[] = []
) => {
  useEffect(() => {
    if (initCb)
      initCb()
        .then()
        .catch((err: any) => console.error(err));
    return () => {
      if (destroyCb)
        destroyCb()
          .then()
          .catch((err: any) => console.error(err));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
