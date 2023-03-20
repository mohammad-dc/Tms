import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import {
  ButtonSizeTypes,
  ButtonVariantTypes,
} from "../../../types/componentProps";

interface IButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariantTypes;
  size?: ButtonSizeTypes;
  isFullWidth?: boolean;
  onClick?: (e?: any) => void;
  type?: "button" | "submit";
  isLoading?: boolean;
}

export const Button = ({
  children,
  size = "large",
  variant = "primary",
  isFullWidth = false,
  onClick,
  type = "button",
  isLoading = false,
}: IButtonProps) => {
  return (
    <ChakraButton
      w={isFullWidth ? "full" : "fit-content"}
      onClick={onClick}
      size={size}
      variant={variant}
      type={type}
      isLoading={isLoading}
    >
      {children}
    </ChakraButton>
  );
};
