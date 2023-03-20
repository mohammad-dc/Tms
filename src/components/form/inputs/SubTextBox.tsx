import { HStack } from "@chakra-ui/react";
import React from "react";
import { Icon } from "../../utils/Icon";
import { TextBox } from "./TextBox";

interface ISubTextBoxProps {
  isInvalid: boolean;
  name: string;
  error?: string;
}

export const SubTextBox = ({ isInvalid, name, error }: ISubTextBoxProps) => {
  return (
    <HStack spacing={2} w={"full"}>
      <TextBox
        type="text"
        name={name}
        isInvalid={isInvalid}
        error={error}
        placeholder={"e.g Todo"}
      />
      <Icon icon={"closeIcon"} color={"grey.300"} pointer />
    </HStack>
  );
};
