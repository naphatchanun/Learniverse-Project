import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ExamResult = () => {
  const { state } = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      Navigate("/");
    }
  }, []);
  return (
    <main>
      <h1>Exam Result</h1>
      <h2>
        Score: {state.payload?.score} / {state.payload.correctAnswer.length}
      </h2>
    </main>
  );
};

export default ExamResult;
