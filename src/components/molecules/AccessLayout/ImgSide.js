import { Center, Box, Image, Heading, VStack } from "@chakra-ui/react";

export const ImgSide = ({ imgAlt, imgSrc, title }) => {
  return (
    <Box>
      <Center height="100%">
        <VStack spacing={5}>
          <Heading as="h3" color="primary" fontSize="24px" textAlign="center">
            {title}
          </Heading>
          <Image alt={imgAlt} src={imgSrc} boxSize="300px" />
        </VStack>
      </Center>
    </Box>
  );
};
