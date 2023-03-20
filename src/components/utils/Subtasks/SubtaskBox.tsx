import { Box, Checkbox, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

interface ISubtaskBox {
  value: string;
  decoration?: "none" | "line-through";
}
export const SubtaskBox = ({ value, decoration = "none" }: ISubtaskBox) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Box bg={"grey.100"} p={3} borderRadius={"4px"} w={"full"}>
      <Checkbox
        variant={"primary"}
        onChange={(e) => setChecked(e.target.checked)}
        value={value}
        textDecoration={checked ? "line-through" : "none"}
        color={checked ? "grey.300" : "black.400"}
      >
        {value}
      </Checkbox>
    </Box>
  );
};
