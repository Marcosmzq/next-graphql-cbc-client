import { gql } from "@apollo/client";
import { CORE_EXERCISE_FIELDS } from "./fragments";

export const CREATE_MULTIPLE_CHOICE = gql`
  ${CORE_EXERCISE_FIELDS}
  mutation createMultipleChoiceExercise(
    $header: String!
    $exam: Int!
    $subject: String!
  ) {
    createMultipleChoiceExercise(
      header: $header
      exam: $exam
      subject: $subject
    ) {
      ...CoreExerciseFields
    }
  }
`;

export const EDIT_MULTIPLE_CHOICE = gql`
  ${CORE_EXERCISE_FIELDS}
  mutation editMultipleChoiceExercise(
    $exerciseId: ID!
    $header: String
    $exam: Int
    $subject: String
  ) {
    editMultipleChoiceExercise(
      exerciseId: $exerciseId
      header: $header
      exam: $exam
      subject: $subject
    ) {
      ...CoreExerciseFields
    }
  }
`;

export const DELETE_MULTIPLE_CHOICE = gql`
  mutation deleteMultipleChoiceExercise($exerciseId: ID!) {
    deleteMultipleChoiceExercise(exerciseId: $exerciseId)
  }
`;
