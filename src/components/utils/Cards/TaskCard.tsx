import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Typography } from "../Typography";

export const TaskCard = () => {
  return (
    <Box
      borderRadius={"8px"}
      px={"16px"}
      py={"20px"}
      pb={7}
      bg={"white"}
      boxShadow={"md"}
      minW={"280px"}
      cursor={"pointer"}
    >
      <VStack spacing={2} align={"flex-start"}>
        <Typography variant="heading-m">
          Build UI for onboarding flow
        </Typography>
        <Typography variant="txt-normal" color="grey.300">
          0 of 3 substasks
        </Typography>
      </VStack>
    </Box>
  );
};
