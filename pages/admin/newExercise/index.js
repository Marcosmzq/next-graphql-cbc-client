import ExerciseForm from "src/components/molecules/forms/ExerciseForm";
import { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_MULTIPLE_CHOICE } from "src/graphql/multipleChoiceMutations";
import { useRouter } from "next/router";
import { AuthContext } from "src/context/userAuth";

const NewExercisePage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [values, setValues] = useState({
    header: undefined,
    exam: undefined,
    subject: undefined,
  });

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addMultipleChoice();
  };
  const [addMultipleChoice, { loading, data }] = useMutation(
    CREATE_MULTIPLE_CHOICE,
    {
      update(_, { data }) {
        const id = data.createMultipleChoiceExercise.id;
        const header = data.createMultipleChoiceExercise.header;
        const exam = data.createMultipleChoiceExercise.exam;
        router.push(`/admin/editExercise/${id}?header=${header}&exam=${exam}`);
      },
      onError(err) {
        console.log(err);
      },
      variables: {
        subject: values.subject,
        header: values.header,
        exam: values.exam !== undefined ? parseInt(values.exam) : undefined,
      },
    }
  );

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/");
    }
  }, [user]);

  return (
    <ExerciseForm
      type="exercise"
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
    />
  );
};

export default NewExercisePage;
