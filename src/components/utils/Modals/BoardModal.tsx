import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { BoardForm } from "../../form/forms/BoardForm";

interface IBoardModalProps {
  mode?: "add" | "edit";
  id?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const BoardModal = ({
  mode = "add",
  id,
  isOpen,
  onClose,
}: IBoardModalProps) => {
  return (
    <Modal isCentered onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {mode === "add" ? "Add New Board" : "edit Board"}
        </ModalHeader>
        <ModalBody>
          <BoardForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
