import { ComponentStyleConfig } from "@chakra-ui/react";

const TextTheme: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    color: "black.200",
  },
  variants: {
    "heading-xl": {
      fontSize: "24px",
    },
    "heading-l": {
      fontSize: "18px",
    },
    "heading-m": {
      fontSize: "15px",
    },
    "heading-s": {
      fontSize: "12px",
    },
    "txt-normal": {
      fontSize: "13px",
      lineHeight: "3px",
      fontWeight: 500,
    },
    "txt-bold": {
      fontSize: "12px",
      lineHeight: "0.5px",
    },
  },
};

export default TextTheme;
