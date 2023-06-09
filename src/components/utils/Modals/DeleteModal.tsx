import {
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { deleteMessageDialog } from "../../../core/helpers/deleteMessageDialog";
import { deleteBoard } from "../../../core/services/boardServices";
import { deleteTask } from "../../../core/services/tasksServices";
import { useSendQuery } from "../../../hooks";
import { Button } from "../../form/buttons/Button";
import { Typography } from "../Typography";

interface IDeleteModalProps {
  mode?: "board" | "task";
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

export const DeleteModal = ({
  mode = "board",
  id,
  isOpen,
  onClose,
}: IDeleteModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Modal isCentered onClose={onClose} size={"lg"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"danger.200"}>
          {mode === "board" ? "Delete this board" : "Delete this task"}
        </ModalHeader>
        <ModalBody>
          <VStack spacing={5} pb={"20px"} align={"flex-start"}>
            <Typography variant="txt-normal" color="grey.300">
              {deleteMessageDialog(mode, "Build setting UI")}
            </Typography>
            <HStack spacing={3} w={"full"}>
              <Button
                isLoading={isLoading}
                variant="danger"
                isFullWidth
                size="small"
                onClick={async () => {
                  setIsLoading(true);
                  if (mode === "board") await deleteBoard({ id });
                  else if (mode === "task") await deleteTask({ taskId: id });
                  setIsLoading(false);
                  //TODO: return to boards page
                }}
              >
                Delete
              </Button>
              <Button
                onClick={onClose}
                variant="secondary"
                isFullWidth
                size="small"
              >
                Cancel
              </Button>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
