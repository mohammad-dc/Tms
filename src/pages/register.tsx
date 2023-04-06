import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AuthForm } from "../components/form/forms/AuthForm";

const RegisterPage = () => {
  return (
    <Box h={"100vh"} w={"full"}>
      <Flex h={"full"} justify={"center"} align={"center"}>
        <AuthForm mode={1} />
      </Flex>
    </Box>
  );
};

RegisterPage.isAuth = true;

export default RegisterPage;
