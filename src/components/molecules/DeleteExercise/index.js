import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useMutation } from "@apollo/client";
import { DELETE_MULTIPLE_CHOICE } from "src/graphql/multipleChoiceMutations";
import { useRouter } from "next/router";

const DeleteExercise = ({ exerciseId }) => {
  const router = useRouter();
  const [deleteExercise, { loading }] = useMutation(DELETE_MULTIPLE_CHOICE, {
    update() {
      router.replace("/admin/newExercise");
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
      isLoading={loading}
      onClick={() => deleteExercise()}
    />
  );
};

export default DeleteExercise;
