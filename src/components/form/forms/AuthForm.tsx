import { VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { login, register } from "../../../core/services/usersServices";
import { authSchema } from "../../../validations/authValidations";
import { Typography } from "../../utils/Typography";
import { Button } from "../buttons/Button";
import { TextBox } from "../inputs/TextBox";

interface IAuthFormProp {
  mode: 0 | 1;
}
export const AuthForm = ({ mode }: IAuthFormProp) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const { push } = useRouter();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={authSchema}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true);
          if (mode === 0) {
            await login(values);
            push("/boards");
          } else {
            await register(values);
            push("/login");
          }
          actions.setSubmitting(false);
        } catch (error: any) {
          alert(error.response.data.message);
        }
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form style={{ width: "40%" }}>
          <VStack spacing={4}>
            <Typography variant="heading-xl">
              {mode === 0 ? "Login" : "Register"}
            </Typography>
            <TextBox
              label="Email"
              type="email"
              name="email"
              isInvalid={!!errors.email && (touched.email as boolean)}
              error={errors.email}
              placeholder={"e.g example@example.com"}
            />
            <TextBox
              label="Password"
              type="password"
              name="password"
              isInvalid={!!errors.password && (touched.password as boolean)}
              error={errors.password}
              placeholder={"*******"}
            />
            <Button
              type={"submit"}
              isLoading={isSubmitting}
              isFullWidth
              size="small"
              variant="primary"
            >
              {mode === 0 ? "Login" : "Register"}
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
