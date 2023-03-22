import { List, ListIcon, ListItem, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../../common/icons";
import { useBoard } from "../../../context/boardsContext";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { BoardType } from "../../../types/middlewares/boards";
import { BoardModal } from "../Modals/BoardModal";

interface IItemList {
  active?: boolean;
  item: { id: number; name: string };
}
const ItemList = ({ active = false, item }: IItemList) => {
  const variant = {
    primary: {
      color: "white",
      bg: "primary.200",
      radius: "full",
    },
    secondary: {
      color: "grey.300",
      bg: "transparent",
      radius: "none",
    },
  };

  const style = active ? variant.primary : variant.secondary;
  return (
    <ListItem
      w={"90%"}
      p={2}
      cursor={"pointer"}
      color={style.color}
      bg={style.bg}
      borderTopRightRadius={style.radius}
      borderBottomRightRadius={style.radius}
      pl={{ md: 7, sm: 3 }}
    >
      <ListIcon as={icons.boardIcon} color={style.color} />
      {item.name}
    </ListItem>
  );
};

interface IBoardListProps {
  boards: BoardType[];
}
export const BoardsList = ({ boards }: IBoardListProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
  const { boardId } = router.query as { boardId: string };
  return (
    <List spacing={3} w={"full"}>
      {boards.map((el) => (
        <Link href={`/boards/${el.id}`} key={el.id}>
          <ItemList item={el} active={el.id === parseInt(boardId)} />
        </Link>
      ))}
      <ListItem
        w={"full"}
        p={2}
        cursor={"pointer"}
        color={"primary.200"}
        pl={{ md: 7, sm: 3 }}
        onClick={onOpen}
      >
        <ListIcon as={icons.boardIcon} color={"primary.200"} />
        Create New Board
      </ListItem>

      {/* Modal */}
      <BoardModal isOpen={isOpen} onClose={onClose} />
    </List>
  );
};
