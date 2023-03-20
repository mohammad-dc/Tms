import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { LabelInput } from "./LabelInput";

interface ITextBox {
  isInvalid: boolean;
  name: string;
  type: string;
  error?: string;
  label?: string;
  placeholder: string;
}
export const TextBox = ({
  isInvalid,
  name,
  type,
  error,
  placeholder,
  label,
}: ITextBox) => {
  return (
    <FormControl isInvalid={isInvalid}>
      {label && <LabelInput label={label} />}
      <InputGroup>
        <Field
          as={Input}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          _placeholder={{ color: "grey.300", fontSize: "13px" }}
          borderRadius={"4px"}
          borderWidth={"1.5px"}
          borderStyle={"solid"}
          borderColor={"grey.200"}
          size={"lg"}
        />
        <InputRightElement w={"25%"}>
          {error && <FormErrorMessage>{"Can't be empty"}</FormErrorMessage>}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
