import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import ExerciseForm from "src/components/molecules/forms/ExerciseForm";
import { useMutation } from "@apollo/client";
import { ADD_CHOICE } from "src/graphql/choicesMutations";
import { ADD_ANS_JUST } from "src/graphql/ansJustMutations";
import { useState } from "react";

const NewExOption = ({ exerciseId, type, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialValues = {
    status: undefined,
    header: undefined,
    exerciseId,
  };
  const [values, setValues] = useState(initialValues);
  const [addChoice, { loading }] = useMutation(ADD_CHOICE, {
    update() {
      onClose();
    },
    onError(err) {
      console.error(err);
      console.log("Ha ocurrido un error");
    },
    variables: {
      exerciseId,
      choiceHeader: values.header,
      choiceStatus: values.status == "true" ? true : false,
    },
  });
  const [addAnsJus] = useMutation(ADD_ANS_JUST, {
    update() {
      onClose();
    },
    onError(err) {
      console.error(err);
      console.log("Ha ocurrido un error");
    },
    variables: {
      exerciseId,
      ansJustHeader: values.header,
      ansJusStatus: values.status == "true" ? true : false,
    },
  });
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (type === "addChoice") {
      await addChoice();
    }
    if (type === "addAnsJus") {
      await addAnsJus();
    }
    setValues(initialValues);
  };
  return (
    <>
      <Button variant="outline" colorScheme="black" onClick={onOpen}>
        {title}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ExerciseForm
              handleSubmit={handleOnSubmit}
              handleOnChange={handleOnChange}
              loading={loading}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewExOption;
