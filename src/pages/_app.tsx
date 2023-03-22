import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { Layout } from "../components/layout/Layout";
import { BoardsProvider } from "../context/boardsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BoardsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BoardsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
