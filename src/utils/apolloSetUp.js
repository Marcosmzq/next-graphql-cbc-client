import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://next-graphql-cbc-server.herokuapp.com/",
});

const authLink = setContext((_, { headers }) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("jwtToken");
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
