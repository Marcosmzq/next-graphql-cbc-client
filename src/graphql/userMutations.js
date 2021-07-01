import { gql } from "@apollo/client";
import { CORE_USER_FIELDS } from "./fragments";

export const REGISTER_USER = gql`
  ${CORE_USER_FIELDS}
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      ...CoreUserFields
    }
  }
`;

export const LOGIN_USER = gql`
  ${CORE_USER_FIELDS}
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ...CoreUserFields
    }
  }
`;
