import { gql } from "@apollo/client";
import { CORE_EXERCISE_FIELDS } from "./fragments";

export const ADD_CHOICE = gql`
  ${CORE_EXERCISE_FIELDS}
  mutation addChoice(
    $exerciseId: ID!
    $choiceHeader: String!
    $choiceStatus: Boolean!
  ) {
    addChoice(
      exerciseId: $exerciseId
      choiceStatus: $choiceStatus
      choiceHeader: $choiceHeader
    ) {
      ...CoreExerciseFields
    }
  }
`;

export const EDIT_CHOICE = gql`
  ${CORE_EXERCISE_FIELDS}
  mutation editChoice(
    $exerciseId: ID!
    $choiceId: ID!
    $newChoiceHeader: String
    $newChoiceStatus: Boolean
  ) {
    editChoice(
      newChoiceStatus: $newChoiceStatus
      newChoiceHeader: $newChoiceHeader
      choiceId: $choiceId
      exerciseId: $exerciseId
    ) {
      ...CoreExerciseFields
    }
  }
`;

export const DELETE_CHOICE = gql`
  mutation deleteChoice($exerciseId: ID!, $choiceId: ID!) {
    deleteChoice(exerciseId: $exerciseId, choiceId: $choiceId)
  }
`;
