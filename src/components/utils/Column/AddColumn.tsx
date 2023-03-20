import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

export const AddColumn = () => {
  return (
    <Box
      bg={"grey.200"}
      borderRadius={"6px"}
      h={"full"}
      minW={"280px"}
      cursor={"pointer"}
    >
      <Flex justifyContent={"center"} alignItems={"center"} h={"full"}>
        <HStack spacing={1}>
          <Icon icon={"plusIcon"} color={"grey.300"} />
          <Typography variant="heading-xl" color="grey.300">
            New Column
          </Typography>
        </HStack>
      </Flex>
    </Box>
  );
};
