import { Box, HStack, VStack } from "@chakra-ui/react";
import { TaskCard } from "../Cards/TaskCard";
import { Typography } from "../Typography";

export const Column = () => {
  return (
    <Box>
      <HStack spacing={2}>
        <Box borderRadius={"full"} w={"15px"} h={"15px"} bg={"teal"} />
        <Typography variant={"txt-bold"} color={"grey.300"} uppercase>
          todo (4)
        </Typography>
      </HStack>
      <VStack spacing={5} mt={5}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </VStack>
    </Box>
  );
};
