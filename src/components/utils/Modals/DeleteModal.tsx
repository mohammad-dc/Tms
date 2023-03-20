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
import React from "react";
import { deleteMessageDialog } from "../../../core/helpers/deleteMessageDialog";
import { Button } from "../../form/buttons/Button";
import { Typography } from "../Typography";

interface IDeleteModalProps {
  mode?: "board" | "task";
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteModal = ({
  mode = "board",
  isOpen,
  onClose,
}: IDeleteModalProps) => {
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
              <Button variant="danger" isFullWidth size="small">
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
