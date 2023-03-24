import { useToast, VStack } from "@chakra-ui/react";
import { FieldArray, Form, Formik } from "formik";
import { useState } from "react";
import { deleteBoardColumn } from "../../../core/services/boardColumnsServices";
import { createBoard, editBoard } from "../../../core/services/boardServices";
import { BoardProps } from "../../../types/pageProps";
import { boardSchema } from "../../../validations/boardValidations";
import { Icon } from "../../utils/Icon";
import { Button } from "../buttons/Button";
import { LabelInput } from "../inputs/LabelInput";
import { SubTextBox } from "../inputs/SubTextBox";
import { TextBox } from "../inputs/TextBox";

interface IBoardFormProps {
  board?: BoardProps;
  mode?: "add" | "edit";
}
export const BoardForm = ({ board, mode = "add" }: IBoardFormProps) => {
  const [deleting, setDeleting] = useState<boolean>(false);
  const initialValues: { name: string; columns: any[] } = {
    name: board?.name || "",
    columns:
      Array.from(board?.boardColumns || [], (el) => {
        return { isNew: false, value: el.name, id: el.id };
      }) || [],
  };

  const toast = useToast();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={boardSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        const columns = [];
        for (let col of values.columns) {
          if (col.isNew) columns.push(col.value);
        }
        const payload = { name: values.name, columns };
        //* send request to create new board to server
        const res =
          mode === "add"
            ? await createBoard(payload)
            : board && (await editBoard({ ...payload, boardId: board?.id }));
        actions.setSubmitting(false);
        toast({
          title: res?.message,
          status: "success",
          isClosable: true,
        });
      }}
    >
      {({ isSubmitting, errors, touched, values }) => (
        <Form style={{ padding: "20px 0" }}>
          <TextBox
            label="Name"
            type="text"
            name="name"
            isInvalid={!!errors.name && (touched.name as boolean)}
            error={errors.name}
            placeholder={"e.g Web Design"}
          />
          <VStack align={"flex-start"} spacing={0} mt={5}>
            <LabelInput label={"Board Columns"} />

            <FieldArray
              name="columns"
              render={(arrayHelpers) => {
                return (
                  <VStack w={"full"} spacing={3}>
                    {values.columns.map((el, i) => (
                      <SubTextBox
                        key={i}
                        name={`columns.${i}.value`}
                        isInvalid={false}
                        onClick={async () => {
                          if (!el.isNew) {
                            setDeleting(true);
                            await deleteBoardColumn({
                              boardColumnId: el.id,
                            });
                            setDeleting(false);
                          }
                          arrayHelpers.remove(i);
                        }}
                      />
                    ))}
                    <Button
                      isFullWidth
                      size="small"
                      variant="secondary"
                      onClick={() => {
                        arrayHelpers.insert(values.columns.length + 1, {
                          isNew: true,
                          value: "",
                          id: Math.random(),
                        });
                      }}
                    >
                      <Icon color={"primary.200"} icon="plusIcon" />
                      <span>Add New Column</span>
                    </Button>
                  </VStack>
                );
              }}
            />
          </VStack>
          <VStack spacing={5} mt={5}>
            <Button
              type={"submit"}
              isLoading={isSubmitting}
              isFullWidth
              size="small"
              variant="primary"
            >
              {mode === "add" ? "Create New Board" : "Save Changes"}
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
