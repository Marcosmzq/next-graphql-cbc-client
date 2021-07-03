import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useMutation } from "@apollo/client";
import { DELETE_MULTIPLE_CHOICE } from "src/graphql/multipleChoiceMutations";

const DeleteExercise = ({ exerciseId }) => {
  const [deleteExercise] = useMutation(DELETE_MULTIPLE_CHOICE, {
    update() {
      console.log("Se ha borrado exitosamente");
    },
    onError(err) {
      console.error(err);
      console.log("Ha ocurrido un error al intentar borrar este ejercicio");
    },
    variables: {
      exerciseId,
    },
  });
  return (
    <IconButton
      colorScheme="red"
      borderRadius="20%"
      icon={<DeleteIcon />}
      onClick={() => deleteExercise()}
    />
  );
};

export default DeleteExercise;
