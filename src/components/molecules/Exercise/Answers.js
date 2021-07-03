import { Text } from "@chakra-ui/react";

const Answers = ({ options, setActiveAnswers, activeAnswers }) => {
  return !activeAnswers ? (
    <>
      {options.map((option) => {
        return (
          <Text
            key={option.header}
            as="em"
            cursor="pointer"
            p="10px"
            fontSize="14px"
            border="1px"
            borderColor="gray.300"
            onClick={() => setActiveAnswers(true)}
          >
            {option.header}
          </Text>
        );
      })}
    </>
  ) : (
    <>
      {options.map((option) => {
        if (option.status === true) {
          return (
            <Text
              key={option.header}
              cursor="pointer"
              border="1px"
              borderColor="green.500"
              bg="green.500"
              color="gray.100"
              p="10px"
              fontSize="14px"
              fontWeight="bold"
            >
              {option.header}
            </Text>
          );
        } else {
          return (
            <Text
              key={option.header}
              cursor="pointer"
              bg="red.500"
              color="gray.100"
              p="10px"
              fontSize="14px"
              fontWeight="bold"
              border="1px"
              borderColor="red.500"
            >
              {option.header}
            </Text>
          );
        }
      })}
    </>
  );
};

export default Answers;
