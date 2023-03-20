import React from "react";
import { Text } from "@chakra-ui/react";
import { colorTypes, TypographyVariantTypes } from "../../types/componentProps";

interface ITypographyProps {
  children?: React.ReactNode;
  variant?: TypographyVariantTypes;
  color?: colorTypes;
  uppercase?: boolean;
  display?: any;
}

export const Typography = ({
  children,
  variant = "txt-normal",
  color = "black.200",
  uppercase = false,
  display = "block",
}: ITypographyProps) => {
  return (
    <Text
      display={display}
      variant={variant}
      color={color}
      textTransform={uppercase ? "uppercase" : "initial"}
    >
      {children}
    </Text>
  );
};
