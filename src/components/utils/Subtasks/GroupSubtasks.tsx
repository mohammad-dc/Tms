import { CheckboxGroup, Stack } from "@chakra-ui/react";
import React from "react";
import { SubtaskBox } from "./SubtaskBox";

interface IGroupSubtasksProps {
  values: any[];
}
export const GroupSubtasks = ({ values }: IGroupSubtasksProps) => {
  return (
    <CheckboxGroup colorScheme={"purple"}>
      <Stack spacing={[1, 2]} direction={["column", "column"]} w={"full"}>
        {values.map((el) => (
          <SubtaskBox key={el} value={el} />
        ))}
      </Stack>
    </CheckboxGroup>
  );
};
