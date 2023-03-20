import { ComponentStyleConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/styled-system";

const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    px: "16px",
    py: "20px",
  },
  sizes: {
    large: {
      height: "48px",
      borderRadius: "24px",
    },
    small: {
      height: "40px",
      borderRadius: "20px",
    },
  },
  variants: {
    primary: {
      bg: "primary.200",
      color: "white",
      _hover: {
        bg: "primary.100",
      },
    },
    secondary: (props: StyleFunctionProps) => ({
      bg: props.colorMode === "dark" ? "white" : "rgb(99, 95, 199, 0.1)",
      color: "primary.200",
      _hover: {
        bg: props.colorMode === "dark" ? "white" : "rgb(99, 95, 199, 0.25)",
      },
    }),
    danger: {
      bg: "danger.200",
      color: "white",
      _hover: {
        bg: "danger.100",
      },
    },
  },
};

export default ButtonTheme;
