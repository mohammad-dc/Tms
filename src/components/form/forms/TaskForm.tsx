import { Spacer, VStack } from "@chakra-ui/react";
import { FieldArray, Form, Formik } from "formik";
import { useState } from "react";
import { useBoard } from "../../../context/boardsContext";
import { createTask, editTask } from "../../../core/services/tasksServices";
import { BoardType } from "../../../types/middlewares/boards";
import { BoardProps, TaskProps } from "../../../types/pageProps";
import { taskSchema } from "../../../validations/taskValidations";
import { Icon } from "../../utils/Icon";
import { Button } from "../buttons/Button";
import { LabelInput } from "../inputs/LabelInput";
import { SelectBox } from "../inputs/SelectBox";
import { SubTextBox } from "../inputs/SubTextBox";
import { TextareaBox } from "../inputs/TextareaBox";
import { TextBox } from "../inputs/TextBox";

interface ITaskFormProps {
  board?: BoardProps;
  mode?: "add" | "edit";
  task?: TaskProps;
}

export const TaskForm = ({ board, mode = "add", task }: ITaskFormProps) => {
  const initialValues: {
    title: string;
    description: string;
    subTasks: any[];
    status: string;
  } = {
    title: task?.title || "",
    description: task?.description || "",
    subTasks:
      Array.from(task?.subTasks || [], (el) => {
        return { isNew: false, value: el.title, id: el.id };
      }) || [],
    status: board?.boardColumns[0].id.toString() || "0",
  };

  const { insertTask } = useBoard();
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={taskSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        const subTasks = [];
        for (let sub of values.subTasks) {
          if (sub.isNew) subTasks.push(sub.value);
        }
        const payload = {
          boardColumnId: parseInt(values.status),
          title: values.title,
          description: values.description,
          subTasks: subTasks,
        };

        if (mode === "add") {
          const res = await createTask(payload);
          insertTask(res.response);
        } else {
          task?.id && (await editTask({ ...payload, taskId: task?.id }));
        }
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched, setFieldValue, values }) => (
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
            <VStack w={"full"} align={"flex-start"} spacing={0} mt={5}>
              <LabelInput label={"Subtasks"} />
              <FieldArray
                name={"subTasks"}
                render={(arrayHelpers) => {
                  return (
                    <VStack w={"full"} spacing={3}>
                      {values.subTasks.map((el, i) => (
                        <SubTextBox
                          key={i}
                          name={`subTasks.${i}.value`}
                          isInvalid={false}
                          onClick={() => arrayHelpers.remove(i)}
                        />
                      ))}
                      <Button
                        isFullWidth
                        size="small"
                        variant="secondary"
                        onClick={() => {
                          arrayHelpers.insert(values.subTasks.length + 1, {
                            isNew: true,
                            value: "",
                          });
                        }}
                      >
                        <Icon color={"primary.200"} icon="plusIcon" />
                        <span>Add New Subtask</span>
                      </Button>
                    </VStack>
                  );
                }}
              />
            </VStack>
            <Spacer h={10} />
            {board && (
              <SelectBox
                placeholder={"Status"}
                options={board?.boardColumns}
                onSelect={(value) => setFieldValue("status", value)}
                name="status"
                label="Status"
              />
            )}
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
