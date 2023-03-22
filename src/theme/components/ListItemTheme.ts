import { ComponentStyleConfig } from "@chakra-ui/react";

const ListItemTheme: ComponentStyleConfig = {
  baseStyle: {
    color: "grey.300",
    cursor: "pointer",
    w: "full",
    p: 2,
  },
  variants: {
    primary: {
      bg: "primary.200",
      color: "white",
      borderTopRightRadius: "full",
      borderBottomRightRadius: "full",
    },
    secondary: {
      bg: "transparent",
    },
  },
};

export default ListItemTheme;
