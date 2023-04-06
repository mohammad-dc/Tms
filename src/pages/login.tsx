import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AuthForm } from "../components/form/forms/AuthForm";

const LoginPage = () => {
  return (
    <Box h={"100vh"} w={"full"}>
      <Flex h={"full"} justify={"center"} align={"center"}>
        <AuthForm mode={0} />
      </Flex>
    </Box>
  );
};

LoginPage.isAuth = true;

export default LoginPage;
