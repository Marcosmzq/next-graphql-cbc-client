import { ApolloProvider } from "@apollo/client";
import { client } from "src/utils/apolloSetUp";
import { ChakraProvider, Box } from "@chakra-ui/react";
import NavBar from "src/components/molecules/NavBar";
import { myTheme } from "../styles/theme";
import { AuthProvider } from "src/context/userAuth";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ChakraProvider resetCSS theme={myTheme}>
          <Box maxW="100vw">
            <NavBar />
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
