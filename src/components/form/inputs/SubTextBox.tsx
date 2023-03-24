import { HStack } from "@chakra-ui/react";
import React from "react";
import { Icon } from "../../utils/Icon";
import { IconButton } from "../buttons/IconButton";
import { TextBox } from "./TextBox";

interface ISubTextBoxProps {
  isInvalid: boolean;
  name: string;
  onClick: (e?: any) => void;
  loading?: boolean;
}

export const SubTextBox = ({
  isInvalid,
  name,
  onClick,
  loading = false,
}: ISubTextBoxProps) => {
  return (
    <HStack spacing={2} w={"full"}>
      <TextBox
        type="text"
        name={name}
        isInvalid={isInvalid}
        error={"Can't be empty"}
        placeholder={"e.g Todo"}
      />
      <IconButton
        isLoading={loading}
        icon={"closeIcon"}
        label={"remove field"}
        onClick={onClick}
      />
    </HStack>
  );
};
