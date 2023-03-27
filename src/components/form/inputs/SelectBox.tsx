import { FormControl, Select } from "@chakra-ui/react";
import { Field } from "formik";
import { changeBoardColumn } from "../../../core/services/tasksServices";
import { BoardColumnProps } from "../../../types/pageProps";
import { LabelInput } from "./LabelInput";

interface ISelectBoxProps {
  placeholder: string;
  options: BoardColumnProps[];
  onSelect: (value: string) => void;
  name: string;
  label?: string;
  withFormik?: boolean;
  selected?: number;
  taskId?: number;
}
export const SelectBox = ({
  placeholder,
  options,
  onSelect,
  name,
  label,
  withFormik = true,
  selected,
  taskId,
}: ISelectBoxProps) => {
  return (
    <FormControl>
      {label && <LabelInput label={label} />}
      {withFormik ? (
        <Field
          as={Select}
          name={name}
          onChange={async (e: any) => {
            taskId &&
              (await changeBoardColumn({
                boardColumnId: parseInt(e.target.value),
                taskId,
              }));
            return onSelect(e.target.value);
          }}
        >
          {options.map((el) => (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          ))}
        </Field>
      ) : (
        <Select
          name={name}
          defaultValue={selected}
          onChange={async (e: any) => {
            taskId &&
              (await changeBoardColumn({
                boardColumnId: parseInt(e.target.value),
                taskId,
              }));
            return onSelect(e.target.value);
          }}
        >
          {options.map((el) => (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          ))}
        </Select>
      )}
    </FormControl>
  );
};
