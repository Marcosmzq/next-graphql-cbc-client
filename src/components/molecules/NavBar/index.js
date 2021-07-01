import { Box, Button, Flex, Heading, Stack, Divider } from "@chakra-ui/react";
import { AuthContext } from "src/context/userAuth";
import { useContext } from "react";
import ColorModeBtn from "./ColorModeBtn";
import Link from "next/link";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <Flex
        p={5}
        direction={["column", "row"]}
        align="center"
        justify="space-between"
        position={["relative", "sticky"]}
        w="95vw"
      >
        <Link href="/" passHref>
          <Heading as="h1" color="primary" cursor="pointer">
            Next
          </Heading>
        </Link>
        {user ? (
          <Box>
            <ColorModeBtn />
            <Button
              variant="solid"
              color="white"
              borderColor="primary"
              bg="primary"
              mx="5px"
              onClick={logout}
            >
              Cerrar sesion
            </Button>
          </Box>
        ) : (
          <Box>
            <Stack direction={["column", "row"]} spacing="5px">
              <ColorModeBtn />
              <Link href="/register" passHref>
                <Button variant="outline" color="primary" borderColor="primary">
                  Crear cuenta
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button
                  variant="solid"
                  color="white"
                  borderColor="primary"
                  bg="primary"
                >
                  Iniciar sesion
                </Button>
              </Link>
            </Stack>
          </Box>
        )}
      </Flex>
      <Divider orientation="horizontal" my="10px" />
    </>
  );
};

export default NavBar;
