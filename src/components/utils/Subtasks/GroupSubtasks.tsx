import { CheckboxGroup, Stack } from "@chakra-ui/react";
import React from "react";
import { SubtasksProps } from "../../../types/pageProps";
import { SubtaskBox } from "./SubtaskBox";

interface IGroupSubtasksProps {
  values: SubtasksProps[];
}
export const GroupSubtasks = ({ values }: IGroupSubtasksProps) => {
  console.log({ values });
  return (
    <CheckboxGroup colorScheme={"purple"}>
      <Stack spacing={[1, 2]} direction={["column", "column"]} w={"full"}>
        {values.map((el) => (
          <SubtaskBox
            key={el.id}
            value={el.title}
            isCompleted={el.isCompleted}
            id={el.id}
          />
        ))}
      </Stack>
    </CheckboxGroup>
  );
};
