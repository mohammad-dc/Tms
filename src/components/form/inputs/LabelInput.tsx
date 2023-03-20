import { FormLabel } from "@chakra-ui/react";
import React from "react";

interface ILabelInput {
  label: string;
}
export const LabelInput = ({ label }: ILabelInput) => {
  return (
    <FormLabel color={"grey.300"} fontSize={"12px"} fontWeight="bold">
      {label}
    </FormLabel>
  );
};
