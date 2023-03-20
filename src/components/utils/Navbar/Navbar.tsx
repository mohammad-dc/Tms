import { Box, Center, HStack, useDisclosure } from "@chakra-ui/react";
import { Button } from "../../form/buttons/Button";
import { Icon } from "../Icon";
import { Logo } from "../Logo/Logo";
import { BoardModal } from "../Modals/BoardModal";
import { DeleteModal } from "../Modals/DeleteModal";
import { TaskModal } from "../Modals/TaskModal";
import { ViewTaskModal } from "../Modals/ViewTaskModal";
import { Typography } from "../Typography";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      p={{ md: 0, sm: 5 }}
      h={{ md: "96px", s: "80px" }}
      w={"full"}
      borderBottom={"1px solid"}
      borderColor={"grey.200"}
      bg={"white"}
    >
      <HStack>
        {/* Logo */}
        <Box
          p={{ md: 5, sm: 2 }}
          borderRightStyle={"solid"}
          borderColor={"grey.200"}
          borderRightWidth={{ md: "1px", sm: "0px" }}
          w={{ lg: "300px", md: "260px" }}
        >
          <Logo />
        </Box>
        <HStack justify={"space-between"} align={"center"} w={"full"}>
          <HStack justify={"center"} align={"center"} spacing={1}>
            <Typography variant="heading-l">Platform Launch</Typography>
            <Center display={{ md: "none", sm: "block" }} cursor="pointer">
              <Icon icon="arrowDownIcon" color="primary.200" />
            </Center>
          </HStack>
          <HStack spacing={3} align={"center"}>
            <Button onClick={onOpen}>
              <Icon icon="plusIcon" />
              <Center display={{ md: "block", sm: "none" }}>
                Add New Task
              </Center>
            </Button>
            <Icon icon="dotsIcon" color="grey.300" pointer />
          </HStack>
        </HStack>
      </HStack>

      {/* Modal */}
      <ViewTaskModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
