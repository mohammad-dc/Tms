import React from "react";
import { Icon as ChakraIcon } from "@chakra-ui/react";
import { icons } from "../../common/icons";
import { colorTypes, IconTypes } from "../../types/componentProps";

interface IIconProps {
  icon: IconTypes;
  color?: colorTypes;
  pointer?: boolean;
}
export const Icon = ({
  icon,
  color = "white",
  pointer = false,
}: IIconProps) => {
  return (
    <ChakraIcon
      as={icons[icon]}
      color={color}
      boxSize={6}
      cursor={pointer ? "pointer" : "inherit"}
      _hover={{ color: icon === "closeIcon" ? "danger.200" : color }}
    />
  );
};
