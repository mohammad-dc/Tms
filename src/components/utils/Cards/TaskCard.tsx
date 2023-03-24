import { Box, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { TaskProps } from "../../../types/pageProps";
import { ViewTaskModal } from "../Modals/ViewTaskModal";
import { Typography } from "../Typography";

interface ITaskCardProps {
  task: TaskProps;
}

export const TaskCard = ({ task }: ITaskCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      onClick={onOpen}
    >
      <VStack spacing={2} align={"flex-start"}>
        <Typography variant="heading-m">{task.title}</Typography>
        <Typography variant="txt-normal" color="grey.300">
          {`${task.cCount} of ${task.stCount} subTasks`}
        </Typography>
      </VStack>
      {/* Modal */}
      <ViewTaskModal isOpen={isOpen} onClose={onClose} task={task} />
    </Box>
  );
};
