import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { Layout } from "../components/layout/Layout";
import { BoardsProvider } from "../context/boardsContext";
import { useInitDestroy } from "../hooks";
import { getCurrentUserInfo } from "../core/services/usersServices";

function MyApp({ Component, pageProps }: AppProps) {
  useInitDestroy(async function onInit() {
    await getCurrentUserInfo();
  });
  const comp: any = { ...Component };
  return (
    <ChakraProvider theme={theme}>
      <BoardsProvider>
        {comp.isDoc || comp.isAuth ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </BoardsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
