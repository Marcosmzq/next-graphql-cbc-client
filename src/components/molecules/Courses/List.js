import { Heading, Divider, Box, Flex } from "@chakra-ui/react";
import Card from "./Card";
import { subjectsList } from "src/utils/subjectsList";

const List = () => {
  return (
    <>
      <Heading
        as="h1"
        textAlign="center"
        fontSize="20px"
        fontWeight="bold"
        color="primary"
      >
        Elegi una categoria y comenza aprender
      </Heading>
      <Divider orientation="horizontal" my="10px" />
      <Flex>
        {subjectsList.map((item) => {
          return <Card key={item} subject={item} />;
        })}
      </Flex>
    </>
  );
};

export default List;
