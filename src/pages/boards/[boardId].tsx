import { Box, HStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { AddColumn } from "../../components/utils/Column/AddColumn";
import { Column } from "../../components/utils/Column/Column";
import { useBoard } from "../../context/boardsContext";
import { Boards } from "../../server/models/boardsModel";
import type { NextPage } from "next";
import { BoardPageProps } from "../../types/pageProps";

const BoardPage: NextPage<BoardPageProps> = (props) => {
  const { saveActiveBoard } = useBoard();

  console.log({ props });
  useEffect(() => saveActiveBoard(props.result));

  return (
    <Box p={5} overflowX={"auto"} h={"100%"}>
      <HStack
        h={"full"}
        justify={"flex-start"}
        align={"flex-start"}
        spacing={7}
      >
        {props.result &&
          props.result.boardColumns.map((el) => (
            <Column boardColumn={el} key={el.id} />
          ))}
        <AddColumn />
      </HStack>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<BoardPageProps> = async (
  _ctx
) => {
  const { boardId } = _ctx?.params as { boardId: string };
  const result = await new Boards().getOneBoard(parseInt(boardId));
  return { props: { result } };
};

export default BoardPage;
