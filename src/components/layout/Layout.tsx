import { Box } from "@chakra-ui/react";
import React from "react";
import { getAllBoards } from "../../core/services/boardServices";
import { useInitDestroy } from "../../hooks";
import { Navbar } from "../utils/Navbar/Navbar";

interface ILayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: ILayoutProps) => {
  useInitDestroy(async function onInit() {
    let result = await getAllBoards();
    console.log({ result });
    localStorage.setItem("boards", JSON.stringify(result.response));
  });

  return (
    <Box w={"full"} h={"100vh"} bg={"grey.100 "} position={"relative"}>
      <Navbar />
      {children}
    </Box>
  );
};
