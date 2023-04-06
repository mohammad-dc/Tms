import { Box, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { BoardColumnModal } from "../Modals/BoardColumnModal";
import { useBoard } from "../../../context/boardsContext";
import { BoardProps } from "../../../types/pageProps";

export const AddColumn = () => {
  const { activeBoard } = useBoard();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={"grey.200"}
      borderRadius={"6px"}
      h={"full"}
      minW={"280px"}
      cursor={"pointer"}
      onClick={onOpen}
    >
      <Flex justifyContent={"center"} alignItems={"center"} h={"full"}>
        <HStack spacing={1}>
          <Icon icon={"plusIcon"} color={"grey.300"} />
          <Typography variant="heading-xl" color="grey.300">
            New Column
          </Typography>
        </HStack>
      </Flex>

      {/* Modal */}
      <BoardColumnModal
        board={activeBoard as BoardProps}
        mode={"add"}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
