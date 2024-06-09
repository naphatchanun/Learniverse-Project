import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ExamResult = () => {
  const { state } = useLocation();
  const Navigate = useNavigate();
  console.log(state);

  useEffect(() => {
    if (!state) {
      Navigate("/");
    }
  }, []);
  return (
    <main>
      <div className="bg-[#FBF3D5] h-svh flex justify-center">
        <div className="rounded-md bg-white h-36 mt-20 w-56">
          <h1 className="text-center mt-5 text-lg font-bold">Exam Result</h1>
          <h2 className="text-center mt-5">
            Score: {state.payload?.score} / {state.payload.correctAnswer.length}
          </h2>
        </div>
      </div>
    </main>
  );
};

export default ExamResult;
