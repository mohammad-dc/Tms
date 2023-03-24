import React from "react";
import {
  IconButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "./Icon";
import { BoardModal } from "./Modals/BoardModal";
import { TaskModal } from "./Modals/TaskModal";
import { DeleteModal } from "./Modals/DeleteModal";
import { BoardProps } from "../../types/pageProps";

interface IMenuProps {
  mode?: "board" | "task";
  id: number;
  board?: BoardProps;
}

export const Menu = ({ mode = "board", id, board }: IMenuProps) => {
  const options = [`Edit ${mode}`, `Delete ${mode}`];
  const boardModal = useDisclosure();
  const taskModal = useDisclosure();
  const deleteModal = useDisclosure();

  return (
    <ChakraMenu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        border={"none"}
        icon={<Icon icon={"dotsIcon"} color={"grey.300"} />}
        variant="outline"
      />
      <MenuList>
        {/* MenuItems are not rendered unless Menu is open */}
        {options.map((el, i) => (
          <MenuItem
            key={el}
            color={i === 0 ? "grey.300" : "danger.200"}
            onClick={() => {
              if (mode === "board" && i === 0) boardModal.onOpen();
              else if (mode === "task" && i === 0) taskModal.onOpen();
              else if (i === 1) deleteModal.onOpen();
            }}
          >
            {el}
          </MenuItem>
        ))}
      </MenuList>

      {/* Modal */}
      <BoardModal
        board={board}
        mode={"edit"}
        isOpen={boardModal.isOpen}
        onClose={boardModal.onClose}
      />
      <TaskModal
        mode={"edit"}
        isOpen={taskModal.isOpen}
        onClose={taskModal.onClose}
      />
      <DeleteModal
        id={id}
        mode={mode}
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
      />
    </ChakraMenu>
  );
};
