import { Form, Formik } from "formik";
import React from "react";
import { BoardColumnSchema } from "../../../validations/boardColumns";
import { createBoardColumn } from "../../../core/services/boardColumnsServices";
import { BoardProps } from "../../../types/pageProps";
import { TextBox } from "../inputs/TextBox";
import { Button } from "../buttons/Button";
import { VStack } from "@chakra-ui/react";
import { useBoard } from "../../../context/boardsContext";

interface IBoardColumnFormProps {
  board: BoardProps;
}
export const BoardColumnForm = ({ board }: IBoardColumnFormProps) => {
  const initialValues = {
    name: "",
  };

  const { insertColumn } = useBoard();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BoardColumnSchema}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true);
          const res = await createBoardColumn({ ...values, boardId: board.id });
          insertColumn({ ...res.response, tasks: [] });
          actions.setSubmitting(false);
        } catch (error: any) {
          alert(error.response.data.message);
        }
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form style={{ padding: "20px 0" }}>
          <VStack spacing={4}>
            <TextBox
              label="Name"
              type="text"
              name="name"
              isInvalid={!!errors.name && (touched.name as boolean)}
              error={errors.name}
              placeholder={"e.g Todo"}
            />
            <Button
              type={"submit"}
              isLoading={isSubmitting}
              isFullWidth
              size="small"
              variant="primary"
            >
              Create New Column
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
