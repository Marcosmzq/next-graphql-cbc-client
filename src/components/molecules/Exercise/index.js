import {
  Container,
  Center,
  Box,
  Text,
  Button,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import Answers from "./Answers";
import Link from "next/link";
import { useState } from "react";

const Exercise = ({ exercise, newEx, data }) => {
  const [activeAnswers, setActiveAnswers] = useState(false);
  return (
    <Center height="100%">
      <Flex height="100%" justify="center" align="center" p="10px">
        <Box border="1px" borderColor="gray.200" p="10px">
          <Box>
            <Link href="/" passHref>
              <Button
                width="100%"
                fontWeight="bold"
                colorScheme="black"
                variant="outline"
              >
                Volver al inicio
              </Button>
            </Link>
          </Box>
          <Divider orientation="horizontal" my="10px" />
          <Flex justify="space-around" p="10px" flexDir="column">
            <Text fontSize="12px" color="primary">
              {exercise.subject}
            </Text>
            <br />
            <Text as="sub" color="primary">
              Cuatrimestre: {exercise.exam}
            </Text>
          </Flex>
          <Divider orientation="horizontal" my="10px" />
          <Box p="15px">
            <Text as="cite" fontWeight="semibold">
              {exercise.header}
            </Text>
          </Box>
          <Divider orientation="horizontal" my="10px" />
          <Stack spacing="10px" dir="column">
            {exercise.choices && (
              <Answers
                options={exercise.choices}
                activeAnswers={activeAnswers}
                setActiveAnswers={setActiveAnswers}
              />
            )}
          </Stack>
          <Divider orientation="horizontal" my="10px" />
          {activeAnswers ? (
            <Box>
              <Button
                width="100%"
                colorScheme="black"
                variant="outline"
                onClick={() => {
                  setActiveAnswers(false);
                  newEx(data);
                }}
              >
                Siguiente
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Flex>
    </Center>
  );
};

export default Exercise;
