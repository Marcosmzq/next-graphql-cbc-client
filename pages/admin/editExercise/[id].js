import { Box, Text, Divider, Heading, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "src/context/userAuth";
import DeleteExercise from "src/components/molecules/DeleteExercise";
import NewExOption from "src/components/organisms/NewExOption";

const Exercise = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { id, header, exam } = router.query;

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      <Box m="10px" p="10px" border="1px" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Text color="primary">ID: {id}</Text>
          <DeleteExercise exerciseId={id} />
        </Flex>
        <Divider orientation="horizontal" my="8px"></Divider>
        <Text fontSize="24px" color="primary">
          Parcial: {exam}
        </Text>
        <Heading as="h3" fontSize="xl" my="10px">
          {header}
        </Heading>
        <Divider orientation="horizontal" my="15px"></Divider>
        <Flex justify="space-around">
          <NewExOption
            exerciseId={id}
            type="addChoice"
            title="Añadir nueva opción de respuesta"
          />
          <NewExOption
            exerciseId={id}
            type="addAnsJus"
            title="Añadir nueva justificación de respuesta"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Exercise;
