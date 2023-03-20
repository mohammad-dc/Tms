import { FormControl, Select } from "@chakra-ui/react";
import { Field } from "formik";
import { LabelInput } from "./LabelInput";

interface ISelectBoxProps {
  placeholder: string;
  options: { _id: string; value: string }[];
  onSelect: (value: string) => void;
  name: string;
  label?: string;
  withFormik?: boolean;
}
export const SelectBox = ({
  placeholder,
  options,
  onSelect,
  name,
  label,
  withFormik = true,
}: ISelectBoxProps) => {
  return (
    <FormControl>
      {label && <LabelInput label={label} />}
      {withFormik ? (
        <Field
          as={Select}
          name={name}
          placeholder={placeholder}
          _placeholder={{ color: "grey.300", fontSize: "13px" }}
          onChange={(e: any) => onSelect(e.target.value)}
        >
          {options.map((el) => (
            <option value={el._id} key={el._id}>
              {el.value}
            </option>
          ))}
        </Field>
      ) : (
        <Select
          name={name}
          placeholder={placeholder}
          _placeholder={{ color: "grey.300", fontSize: "13px" }}
          onChange={(e: any) => onSelect(e.target.value)}
        >
          {options.map((el) => (
            <option value={el._id} key={el._id}>
              {el.value}
            </option>
          ))}
        </Select>
      )}
    </FormControl>
  );
};
