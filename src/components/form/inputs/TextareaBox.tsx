import { FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { LabelInput } from "./LabelInput";

interface ITextareaBox {
  name: string;
  label?: string;
}

export const TextareaBox = ({ name, label }: ITextareaBox) => {
  return (
    <FormControl>
      {" "}
      {label && <LabelInput label={label} />}
      <Field
        as={Textarea}
        id={name}
        name={name}
        size="lg"
        placeholder={
          "e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        }
        _placeholder={{ color: "grey.300", fontSize: "13px" }}
      />
    </FormControl>
  );
};
