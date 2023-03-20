import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { TaskForm } from "../../form/forms/TaskForm";

interface ITaskModalProps {
  mode?: "add" | "edit";
  isOpen: boolean;
  onClose: () => void;
}

export const TaskModal = ({
  mode = "add",
  isOpen,
  onClose,
}: ITaskModalProps) => {
  return (
    <Modal isCentered onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {mode === "add" ? "Add New Task" : "edit Task"}
        </ModalHeader>
        <ModalBody>
          <TaskForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
