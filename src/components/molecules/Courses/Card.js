import {
  Heading,
  Box,
  Button,
  Text,
  SimpleGrid,
  Center,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const Card = ({ subject }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleSelection = (num) => {
    router.push(`/exercise?subject=${subject}&exam=${num}`);
  };
  return (
    <>
      {active ? (
        <Box
          dir="columns"
          border="1px"
          borderColor="gray.200"
          p="20px"
          w="100%"
        >
          <Text
            color="primary"
            my="5px"
            textAlign="center"
            fontSize="20px"
            fontWeight="bold"
          >
            ¿Qué cuatrimestre queres estudiar?
          </Text>
          <Divider orientation="horizontal" my="10px" />
          <SimpleGrid columns={["1", "2"]} spacing="10px">
            <Center height="100%">
              <Button
                fontSize="5xl"
                border="none"
                color="primary"
                variant="outline"
                onClick={() => handleSelection(1)}
              >
                1
              </Button>
            </Center>
            <Center height="100%">
              <Button
                fontSize="5xl"
                border="none"
                color="primary"
                variant="outline"
                onClick={() => handleSelection(2)}
              >
                2
              </Button>
            </Center>
          </SimpleGrid>
        </Box>
      ) : (
        <Box border="1px" borderColor="gray.200" p="20px" w="100%">
          <Flex justify="center" alignItems="center" flexDir="column">
            <Heading
              as="h4"
              textAlign="center"
              fontSize="20px"
              fontWeight="bold"
              color="primary"
            >
              {subject}
            </Heading>
            <Text textAlign="center" my="15px">
              Aca encontraras ejercicios sobre esta materia
            </Text>
            <Button
              onClick={() => setActive(true)}
              colorScheme="black"
              variant="outline"
              width="100%"
            >
              Aprender
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Card;
