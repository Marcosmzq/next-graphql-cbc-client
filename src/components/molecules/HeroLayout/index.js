import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

export const HeroLayout = ({ imgSrc, imgAlt, title, desc }) => {
  return (
    <>
      <Center height="100%">
        <SimpleGrid columns={[1, 2]} spacing={["15px", "40px"]}>
          <Image src={imgSrc} alt={imgAlt} boxSize="300px" p="10px" />
          <Box>
            <Center height="100%" flexDir="column">
              <Heading
                as="h3"
                fontSize="2xl"
                color="primary"
                my={2}
                textAlign="center"
              >
                {title}
              </Heading>
              <Text fontSize="md" textAlign="center">
                {desc}
              </Text>
            </Center>
          </Box>
        </SimpleGrid>
      </Center>
      <Divider orientation="horizontal" my="10px" />
    </>
  );
};
