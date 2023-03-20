import { ComponentStyleConfig } from "@chakra-ui/react";

const CheckboxTheme: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: "white",
      _checked: {
        bg: "primary.200",
        color: "white",
      },
    },
  },
};

export default CheckboxTheme;
