import { HStack } from "@chakra-ui/react";
import { Typography } from "../Typography";
import { LogoIcon } from "./LogoIcon";

export const Logo = () => {
  return (
    <HStack spacing={3}>
      <LogoIcon />
      <Typography display={{ md: "block", sm: "none" }} variant="heading-xl">
        Kanban
      </Typography>
    </HStack>
  );
};
