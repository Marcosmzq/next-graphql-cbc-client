import {
  Box,
  Text,
  Divider,
  Heading,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import ExerciseForm from "src/components/molecules/forms/ExerciseForm";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHOICE } from "src/graphql/choicesMutations";
import { ADD_ANS_JUST } from "src/graphql/ansJustMutations";
import { DELETE_MULTIPLE_CHOICE } from "src/graphql/multipleChoiceMutations";
import { AuthContext } from "src/context/userAuth";

const Exercise = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [activeNewChoiceInput, setActiveNewChoiceInput] = useState(false);
  const [activeNewAnsJusInput, setActiveNewAnsJusInput] = useState(false);
  const [newChoiceValues, setNewChoiceValues] = useState({
    status: undefined,
    header: undefined,
  });
  const [newAnsJusValues, setNewAnsJusValues] = useState({
    status: undefined,
    header: undefined,
  });

  const { id, header, exam } = router.query;
  const parcial =
    exam == 1 ? "PRIMER PARCIAL" : exam == 2 ? "SEGUNDO PARCIAL" : exam;

  const [addChoice] = useMutation(ADD_CHOICE, {
    update() {
      console.log("Añadido con éxito");
    },
    onError(err) {
      console.error(err);
      console.log("Ha ocurrido un error");
    },
    variables: {
      exerciseId: id,
      choiceHeader: newChoiceValues.header,
      choiceStatus: newChoiceValues.status == "true" ? true : false,
    },
  });
  const [addAnsJus] = useMutation(ADD_ANS_JUST, {
    update() {
      console.log("Añadido con éxito");
    },
    onError(err) {
      console.error(err);
      console.log("Ha ocurrido un error");
    },
    variables: {
      exerciseId: id,
      ansJustHeader: newAnsJusValues.header,
      ansJusStatus: newAnsJusValues.status == "true" ? true : false,
    },
  });
  const [deleteExercise] = useMutation(DELETE_MULTIPLE_CHOICE, {
    update() {
      console.log("Se ha borrado exitosamente");
    },
    onError(err) {
      console.error(err);
      console.log("Ha ocurrido un error al intentar borrar este ejercicio");
    },
    variables: {
      exerciseId: id,
    },
  });
  const handleNewChoiceOnChange = (e) => {
    setNewChoiceValues({
      ...newChoiceValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleNewAnsJusOnChange = (e) => {
    setNewAnsJusValues({
      ...newAnsJusValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmitChoice = (e) => {
    e.preventDefault();
    addChoice();
  };
  const handleOnSubmitAnsJus = (e) => {
    e.preventDefault();
    addAnsJus();
  };

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/");
    }
  }, [user]);

  return (
    <Box m="10px" p="10px" border="1px" borderColor="gray.200">
      <Flex justify="space-between" align="center">
        <Text color="primary">ID: {id}</Text>
        <IconButton
          colorScheme="red"
          borderRadius="20%"
          icon={<DeleteIcon />}
          onClick={() => deleteExercise()}
        />
      </Flex>
      <Divider orientation="horizontal" my="8px"></Divider>
      <Text fontSize="24px" color="primary">
        Parcial: {parcial}
      </Text>
      <Heading as="h3" fontSize="xl" my="10px">
        {header}
      </Heading>
      <Divider orientation="horizontal" my="15px"></Divider>
      <Flex justify="space-around">
        <Button onClick={() => setActiveNewChoiceInput(!activeNewChoiceInput)}>
          Añadir nueva opción de respuesta
        </Button>
        <Button onClick={() => setActiveNewAnsJusInput(!activeNewAnsJusInput)}>
          Añadir nueva justificación de respuesta
        </Button>
      </Flex>
      {activeNewChoiceInput ? (
        <Box>
          <Divider orientation="horizontal" my="15px"></Divider>
          <Heading as="h3" fontSize="xl" my="5px">
            Añadir nueva opción de respuesta
          </Heading>
          <ExerciseForm
            handleSubmit={handleOnSubmitChoice}
            handleOnChange={handleNewChoiceOnChange}
          />
        </Box>
      ) : (
        ""
      )}
      {activeNewAnsJusInput ? (
        <Box>
          <Divider orientation="horizontal" my="15px"></Divider>
          <Heading as="h3" fontSize="xl" my="5px">
            Añadir nueva justificación de respuesta
          </Heading>
          <ExerciseForm
            handleSubmit={handleOnSubmitAnsJus}
            handleOnChange={handleNewAnsJusOnChange}
          />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Exercise;
