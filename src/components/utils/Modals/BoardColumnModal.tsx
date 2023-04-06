import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { BoardProps } from "../../../types/pageProps";
import { BoardColumnForm } from "../../form/forms/BoardColumnForm";

interface IBoardColumnModalProps {
  mode?: "add" | "edit";
  isOpen: boolean;
  onClose: () => void;
  board: BoardProps;
}

export const BoardColumnModal = ({
  isOpen,
  onClose,
  board,
  mode = "add",
}: IBoardColumnModalProps) => {
  return (
    <Modal isCentered onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {mode === "add" ? "Add New Column" : "edit Column"}
        </ModalHeader>
        <ModalBody>
          <BoardColumnForm board={board} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
