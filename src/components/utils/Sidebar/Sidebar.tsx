import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { useBoard } from "../../../context/boardsContext";
import { Typography } from "../Typography";
import { BoardsList } from "./BoardsList";

interface ISidebarProps {
  children: React.ReactNode;
}
export const Sidebar = ({ children }: ISidebarProps) => {
  const { boards } = useBoard();
  return (
    <Flex
      h={[null, null, "100%"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      bg={"grey.100 "}
    >
      <Flex
        pt={{ md: 7, sm: 3 }}
        w={{ lg: "300px", md: "260px" }}
        flexDir="column"
        alignItems="center"
        overflowY={"auto"}
        bg={"white"}
        borderRightStyle={"solid"}
        borderColor={"grey.200"}
        borderRightWidth={{ md: "1px", sm: "0px" }}
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <VStack spacing={5} align={"flex-start"}>
              <Box pl={{ md: 7, sm: 3 }}>
                <Typography color="grey.300" variant="txt-normal">
                  ALL BOARDS ({boards.length})
                </Typography>
              </Box>
              <VStack spacing={3} w={"full"}>
                <BoardsList boards={boards} />
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
};
