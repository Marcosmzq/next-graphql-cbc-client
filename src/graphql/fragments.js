import { gql } from "@apollo/client";

export const CORE_EXERCISE_FIELDS = gql`
  fragment CoreExerciseFields on MultipleChoice {
    id
    exam
    header
    subject
    choices {
      id
      header
      status
    }
    answerJustifications {
      id
      header
      status
    }
  }
`;
export const CORE_USER_FIELDS = gql`
  fragment CoreUserFields on User {
    id
    email
    username
    role
    token
  }
`;
