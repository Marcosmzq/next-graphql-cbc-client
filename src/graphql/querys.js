import { gql } from "@apollo/client";
import { CORE_EXERCISE_FIELDS } from "./fragments";

export const GET_ALL_EXERCISES = gql`
  ${CORE_EXERCISE_FIELDS}
  {
    getAllMultipleChoiceExercises {
      ...CoreExerciseFields
    }
  }
`;

export const GET_EXERCISE = gql`
  ${CORE_EXERCISE_FIELDS}
  query getMultipleChoice($id: ID!) {
    getMultipleChoice(id: $id) {
      ...CoreExerciseFields
    }
  }
`;

export const GET_EXERCISE_BY_SUBJECT = gql`
  ${CORE_EXERCISE_FIELDS}
  query getMultipleChoiceBySubject($subject: String!) {
    getMultipleChoiceBySubject(subject: $subject) {
      ...CoreExerciseFields
    }
  }
`;

export const GET_EXERCISE_BY_SUBJECT_AND_EXAM = gql`
  ${CORE_EXERCISE_FIELDS}
  query getMultipleChoiceBySubjectAndExam($subject: String!, $exam: Int!) {
    getMultipleChoiceBySubjectAndExam(subject: $subject, exam: $exam) {
      ...CoreExerciseFields
    }
  }
`;
