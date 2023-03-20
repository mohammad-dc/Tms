import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { images } from "../../../common/images";

export const LogoIcon = () => {
  return (
    <Box w={"24px"} h={"25px"} position={"relative"}>
      <Image fill priority src={images.logo} alt={"Kanban"} />
    </Box>
  );
};
