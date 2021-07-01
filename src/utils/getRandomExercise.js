export const getRandomEx = (data) => {
  const randomNum = Math.floor(
    Math.random() * data.getMultipleChoiceBySubjectAndExam.length
  );
  console.log(randomNum);
  const randomEx = data.getMultipleChoiceBySubjectAndExam[randomNum];
  return randomEx;
};
