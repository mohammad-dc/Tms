import {
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { deleteMessageDialog } from "../../../core/helpers/deleteMessageDialog";
import { Button } from "../../form/buttons/Button";
import { LabelInput } from "../../form/inputs/LabelInput";
import { SelectBox } from "../../form/inputs/SelectBox";
import { Icon } from "../Icon";
import { GroupSubtasks } from "../Subtasks/GroupSubtasks";
import { Typography } from "../Typography";

interface IDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ViewTaskModal = ({ isOpen, onClose }: IDeleteModalProps) => {
  return (
    <Modal isCentered onClose={onClose} size={"lg"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"danger.200"}>
          <HStack spacing={5} justify={"space-between"} align={"center"}>
            <Typography variant="heading-l">
              Research pricing points of various competitors and trial different
              business models
            </Typography>
            <Icon icon="dotsIcon" color="grey.300" />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <VStack spacing={3} pb={"20px"} align={"flex-start"}>
            <Typography variant="txt-normal" color="grey.300">
              {
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition."
              }
            </Typography>
            <LabelInput label={"Subtasks (2 od 3)"} />
            <GroupSubtasks values={["naruto", "kakashi"]} />
            <Spacer h={5} />
            <SelectBox
              withFormik={false}
              placeholder={"Status"}
              options={[{ _id: "1", value: "23" }]}
              onSelect={(value) => null}
              name="status"
              label="Current Status"
            />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
