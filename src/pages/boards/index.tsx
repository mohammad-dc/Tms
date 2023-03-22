import {
  Box,
  Center,
  Flex,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { Button } from "../../components/form/buttons/Button";
import { AddColumn } from "../../components/utils/Column/AddColumn";
import { Column } from "../../components/utils/Column/Column";
import { Icon } from "../../components/utils/Icon";
import { BoardModal } from "../../components/utils/Modals/BoardModal";
import { Typography } from "../../components/utils/Typography";
import { Boards } from "../../server/models/boardsModel";
import { BoardType } from "../../types/middlewares/boards";

type HomePageProps = { boards: BoardType[] };

const BoardsPage: NextPage<HomePageProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={5} overflowX={"auto"} h={"100%"} w={"full"}>
      <Flex h={"full"} justify={"center"} align={"center"} w={"full"}>
        <Button onClick={onOpen}>
          <Icon icon="plusIcon" />
          <Center display={{ md: "block", sm: "none" }}>Add New Board</Center>
        </Button>
      </Flex>

      {/* Modal */}
      <BoardModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps<{ boards: BoardType[] }> = async (
  _ctx
) => {
  const boards = await new Boards().getAllBoards();

  return {
    props: {
      boards,
    },
    revalidate: 60,
  };
};

export default BoardsPage;
