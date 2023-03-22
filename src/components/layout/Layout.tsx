import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { useBoard } from "../../context/boardsContext";
import { getAllBoards } from "../../core/services/boardServices";
import { useInitDestroy } from "../../hooks";
import { Navbar } from "../utils/Navbar/Navbar";
import { Sidebar } from "../utils/Sidebar/Sidebar";

interface ILayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: ILayoutProps) => {
  const { insertMany } = useBoard();
  useInitDestroy(async function onInit() {
    let result = await getAllBoards();
    console.log({ result });
    insertMany(result.response);
  });

  return (
    <Box w={"full"} h={"100vh"}>
      <Navbar />
      <Sidebar>{children}</Sidebar>
    </Box>
  );
};
