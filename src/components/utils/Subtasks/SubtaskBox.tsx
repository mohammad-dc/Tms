import { Box, Checkbox, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { completeSubtask } from "../../../core/services/subtasksServices";
import { useBoard } from "../../../context/boardsContext";

interface ISubtaskBox {
  value: string;
  isCompleted: boolean;
  id: number;
}
export const SubtaskBox = ({ value, isCompleted, id }: ISubtaskBox) => {
  const [checked, setChecked] = useState<boolean>(isCompleted);
  return (
    <Box bg={"grey.100"} p={3} borderRadius={"4px"} w={"full"}>
      <Checkbox
        variant={"primary"}
        onChange={async (e) => {
          const isChecked = e.target.checked;
          setChecked(isChecked);
          const res = await completeSubtask({
            complete: isChecked,
            subtaskId: id,
          });
        }}
        value={value}
        textDecoration={checked ? "line-through" : "none"}
        color={checked ? "grey.300" : "black.400"}
      >
        {value}
      </Checkbox>
    </Box>
  );
};
