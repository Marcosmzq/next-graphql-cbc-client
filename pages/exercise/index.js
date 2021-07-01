import { Container } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "src/context/userAuth";
import { useQuery } from "@apollo/client";
import { GET_EXERCISE_BY_SUBJECT_AND_EXAM } from "src/graphql/querys";
import Exercise from "src/components/molecules/Exercise";
import { getRandomEx } from "src/utils/getRandomExercise";

const ExercisePage = ({ subject, exam }) => {
  const { user } = useContext(AuthContext);
  const [currentEx, setCurrentEx] = useState({});
  const handleSetEx = (data) => {
    const ex = getRandomEx(data);
    setCurrentEx(ex);
  };
  const { data } = useQuery(GET_EXERCISE_BY_SUBJECT_AND_EXAM, {
    variables: {
      exam: parseInt(exam),
      subject,
    },
    onCompleted(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });
  useEffect(() => {
    if (data) handleSetEx(data);
  }, [data]);

  return (
    <Container maxW="container.sm" my="30px">
      {currentEx && (
        <Exercise exercise={currentEx} data={data} newEx={handleSetEx} />
      )}
    </Container>
  );
};

ExercisePage.getInitialProps = async (ctx) => {
  const { subject, exam } = ctx.query;
  return {
    subject,
    exam,
  };
};

export default ExercisePage;
