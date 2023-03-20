import { VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { boardSchema } from "../../../validations/boardValidations";
import { Icon } from "../../utils/Icon";
import { Button } from "../buttons/Button";
import { LabelInput } from "../inputs/LabelInput";
import { SubTextBox } from "../inputs/SubTextBox";
import { TextBox } from "../inputs/TextBox";

export const BoardForm = () => {
  const initialValues = {
    name: "",
    columns: [],
  };

  const [columns, setColumn] = useState<
    {
      id: number;
      name: string;
      value: string;
    }[]
  >([]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={boardSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form style={{ padding: "20px 0" }}>
          <TextBox
            label="Name"
            type="text"
            name="name"
            isInvalid={!!errors.name && (touched.name as boolean)}
            error={errors.name}
            placeholder={"e.g Web Design"}
          />
          {columns.length !== 0 && (
            <VStack align={"flex-start"} spacing={0} mt={5}>
              <LabelInput label={"Board Columns"} />
              <VStack w={"full"} spacing={3}>
                {columns.map((el) => (
                  <SubTextBox
                    key={Math.random()}
                    name="subtask"
                    isInvalid={false}
                  />
                ))}
              </VStack>
            </VStack>
          )}
          <VStack spacing={5} mt={5}>
            <Button
              isFullWidth
              size="small"
              variant="secondary"
              onClick={() => {
                const newColumn = {
                  id: columns.length + 1,
                  name: `column_${columns.length + 1}`,
                  value: "",
                };
                setColumn([...columns, newColumn]);
              }}
            >
              <Icon color={"primary.200"} icon="plusIcon" />
              <span>Add New Column</span>
            </Button>
            <Button
              type={"submit"}
              isLoading={isSubmitting}
              isFullWidth
              size="small"
              variant="primary"
            >
              Create New Board
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
