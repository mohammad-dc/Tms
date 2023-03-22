import React from "react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { IconTypes } from "../../../types/componentProps";
import { Icon } from "../../utils/Icon";

interface IIconButtonProps {
  label: string;
  icon: IconTypes;
  onClick: (e?: any) => void;
}
export const IconButton = ({ icon, label, onClick }: IIconButtonProps) => {
  return (
    <ChakraIconButton
      onClick={onClick}
      bg={"transparent"}
      _hover={{ bg: "transparent" }}
      aria-label={label}
      icon={<Icon icon={icon} color={"grey.300"} />}
    />
  );
};
