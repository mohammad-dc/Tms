import { Box, HStack, VStack } from "@chakra-ui/react";
import { BoardColumnProps } from "../../../types/pageProps";
import { TaskCard } from "../Cards/TaskCard";
import { Typography } from "../Typography";

interface IColumnProps {
  boardColumn: BoardColumnProps;
}
export const Column = ({ boardColumn }: IColumnProps) => {
  return (
    <Box>
      <HStack spacing={2}>
        <Box borderRadius={"full"} w={"15px"} h={"15px"} bg={"teal"} />
        <Typography variant={"txt-bold"} color={"grey.300"} uppercase>
          {`${boardColumn.name} (${boardColumn.tasks.length})`}
        </Typography>
      </HStack>
      <VStack spacing={5} mt={5}>
        {boardColumn.tasks.map((el) => (
          <TaskCard key={el.id} task={el} />
        ))}
      </VStack>
    </Box>
  );
};
