import {
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { useBoard } from "../../../context/boardsContext";
import { TaskProps } from "../../../types/pageProps";
import { LabelInput } from "../../form/inputs/LabelInput";
import { SelectBox } from "../../form/inputs/SelectBox";
import { Menu } from "../Menu";
import { GroupSubtasks } from "../Subtasks/GroupSubtasks";
import { Typography } from "../Typography";

interface IViewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskProps;
}

export const ViewTaskModal = ({
  isOpen,
  onClose,
  task,
}: IViewTaskModalProps) => {
  const { activeBoard } = useBoard();
  return (
    <Modal isCentered onClose={onClose} size={"lg"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"danger.200"}>
          <HStack spacing={5} justify={"space-between"} align={"center"}>
            <Typography variant="heading-l">{task.title}</Typography>
            <Menu id={task.id} mode={"task"} />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <VStack spacing={3} pb={"20px"} align={"flex-start"}>
            <Typography variant="txt-normal" color="grey.300">
              {task.description}
            </Typography>
            <LabelInput
              label={`Subtasks (${task.cCount} of ${task.stCount})`}
            />
            <GroupSubtasks values={task.subTasks} />
            <Spacer h={5} />
            {activeBoard?.boardColumns && (
              <SelectBox
                withFormik={false}
                placeholder={"Status"}
                options={activeBoard?.boardColumns}
                onSelect={(value) => null}
                name="status"
                label="Current Status"
                selected={task.boardCols}
              />
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
