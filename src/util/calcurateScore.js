export const calcurateScore = (answer, correctAnswer) => {
  let score = 0;
  for (let i = 0; i < correctAnswer.length; i++) {
    if (answer[i] === correctAnswer[i]) {
      score++;
    }
  }
  return score;
};
