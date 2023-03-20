import { Box, HStack } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { AddColumn } from "../../components/utils/Column/AddColumn";
import { Column } from "../../components/utils/Column/Column";
import { Boards } from "../../server/models/boardsModel";
import { BoardType } from "../../types/middlewares/boards";

const Home: NextPage = () => {
  return (
    <Box p={5} overflowX={"auto"} h={"90%"}>
      <HStack
        h={"full"}
        justify={"flex-start"}
        align={"flex-start"}
        spacing={7}
      >
        <Column />
        <Column />
        <Column />
        <Column />
        <AddColumn />
      </HStack>
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

export default Home;
