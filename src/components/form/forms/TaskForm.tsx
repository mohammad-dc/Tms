import { Spacer, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { taskSchema } from "../../../validations/taskValidations";
import { Icon } from "../../utils/Icon";
import { Button } from "../buttons/Button";
import { LabelInput } from "../inputs/LabelInput";
import { SelectBox } from "../inputs/SelectBox";
import { SubTextBox } from "../inputs/SubTextBox";
import { TextareaBox } from "../inputs/TextareaBox";
import { TextBox } from "../inputs/TextBox";
export const TaskForm = () => {
  const initialValues = {
    title: "",
    description: "",
    subtasks: [],
    status: "",
  };

  const [subtasks, setSubtask] = useState<
    {
      id: number;
      name: string;
      value: string;
    }[]
  >([]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <Form style={{ padding: "20px 0" }}>
          <VStack spacing={3} w={"full"}>
            <TextBox
              label="Title"
              type="text"
              name="title"
              isInvalid={!!errors.title && (touched.title as boolean)}
              error={errors.title}
              placeholder={"e.g. Take coffee break"}
            />
            <TextareaBox name={"description"} label={"Description"} />
            {subtasks.length !== 0 && (
              <VStack w={"full"} align={"flex-start"} spacing={0} mt={5}>
                <LabelInput label={"Subtasks"} />
                <VStack w={"full"} spacing={3}>
                  {subtasks.map((el) => (
                    <SubTextBox
                      key={Math.random()}
                      name="subtask"
                      isInvalid={false}
                    />
                  ))}
                </VStack>
              </VStack>
            )}
            <Button
              isFullWidth
              size="small"
              variant="secondary"
              onClick={() => {
                const newColumn = {
                  id: subtasks.length + 1,
                  name: `column_${subtasks.length + 1}`,
                  value: "",
                };
                setSubtask([...subtasks, newColumn]);
              }}
            >
              <Icon color={"primary.200"} icon="plusIcon" />
              <span>Add New Subtask</span>
            </Button>
            <Spacer h={10} />
            <SelectBox
              placeholder={"Status"}
              options={[{ _id: "1", value: "23" }]}
              onSelect={(value) => setFieldValue("status", value)}
              name="status"
              label="Status"
            />
            <Button
              type={"submit"}
              isLoading={isSubmitting}
              isFullWidth
              size="small"
              variant="primary"
            >
              Create New Task
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
