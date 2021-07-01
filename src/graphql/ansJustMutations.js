import { gql } from "@apollo/client";
import { CORE_EXERCISE_FIELDS } from "./fragments";

export const ADD_ANS_JUST = gql`
  ${CORE_EXERCISE_FIELDS}
  mutation addAnswerJustification(
    $exerciseId: ID!
    $ansJustHeader: String!
    $ansJusStatus: Boolean!
  ) {
    addAnswerJustification(
      exerciseId: $exerciseId
      ansJustHeader: $ansJustHeader
      ansJusStatus: $ansJusStatus
    ) {
      ...CoreExerciseFields
    }
  }
`;

export const EDIT_ANS_JUST = gql`
  ${CORE_EXERCISE_FIELDS}
  mutation editAnswerJustification(
    $exerciseId: ID!
    $answerJustificationId: ID!
    $newAnsJustHeader: String
    $newAnsJusStatus: Boolean
  ) {
    editAnswerJustification(
      exerciseId: $exerciseId
      answerJustificationId: $answerJustificationId
      newAnsJustHeader: $newAnsJustHeader
      newAnsJusStatus: $newAnsJusStatus
    ) {
      ...CoreExerciseFields
    }
  }
`;

export const DELETE_ANS_JUST = gql`
  mutation deleteAnswerJustification(
    $exerciseId: ID!
    $answerJustificationId: ID!
  ) {
    deleteAnswerJustification(
      exerciseId: $exerciseId
      answerJustificationId: $answerJustificationId
    )
  }
`;
