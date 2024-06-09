import { useEffect, useState, useContext } from "react";
import { AxiosLib } from "../../lib/axiosLib";
import { useNavigate, useParams } from "react-router-dom";
import Exam from "../../component/Exam/Exam";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/user";
import { calcurateScore } from "../../util/calcurateScore";

const Testexam = () => {
  const auth = useContext(AuthContext);
  const examID = useParams();
  const Navigate = useNavigate();

  const [exam, setExam] = useState([]);
  const [current, setCurrent] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const correctAnswer = exam.map((item) => item);
  const [isStart, setIsStart] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  const payload = {
    answer: currentAnswer,
    examID: examID.examID,
    userID: auth.userId,
    correctAnswer: correctAnswer.map((item) => item.answer),
    timeLeft: timer,
    score: calcurateScore(
      currentAnswer,
      correctAnswer.map((item) => item.answer)
    ),
    date: new Date(),
  };

  const fetchExam = async () => {
    try {
      const response = await AxiosLib.get(`/exam/exam/${examID.examID}`);
      if (response.status === 200) {
        setTimer(response.data.duration);
        setExam(response.data.content);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    if (current < exam.length - 1) {
      setCurrent(current + 1);
    }
  };
  const handleBack = () => {
    if (current >= 1) {
      setCurrent(current - 1);
    }
  };
  const handleChange = (e) => {
    setCurrentAnswer({ ...currentAnswer, [current]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      currentAnswer[1] === "" ||
      currentAnswer[2] === "" ||
      currentAnswer[3] === "" ||
      currentAnswer[4] === "" ||
      currentAnswer[5] === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please answer all the questions!",
      });
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonText: "Yes, submit it!",
      confirmButtonColor: "#3085d6",
      showCancelButton: true,
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsFinish(true);
        console.log(payload);
        const result = await AxiosLib.post("/exam/submit", payload);
        if (result.status === 200) {
          Navigate(`/testexam/result/${examID.examID}`, {
            state: { payload: payload },
          });
        }
      }
    });
  };

  const handleStart = () => {
    setIsStart(true);
  };

  useEffect(() => {
    if (!auth.isLogin) {
      Navigate("/login");
    }
    console.log(auth.isLogin);
    fetchExam();
  }, []);

  useEffect(() => {
    if (timer >= 0 && isStart) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      if (timer === 0 && !isFinish) {
        setIsFinish(true);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Time's up!",
          timer: 1500,
          timerProgressBar: true,
        }).then(async () => {
          const result = await AxiosLib.post("/exam/submit", payload);
          if (result.status === 200) {
            Navigate(`/testexam/result/${examID.examID}`, {
              state: { payload: payload },
            });
          }
        });
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [timer, isStart, isFinish, Navigate, payload, examID.examID]);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const remainingSeconds = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${remainingSeconds}`;
  };

  return (
    <main className="flex justify-center mt-10">
      {isStart ? (
        <main>
          <div className="flex justify-end">
            <div className="border bg-gray-200 w-40 h-8 text-center">
              Timer : {formatTime(timer)}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <duv className="rounded-md w-[800px] h-[500px] bg-[#FBF3D5]">
              {exam.map((item, index) => {
                return (
                  <Exam
                    key={index}
                    item={item}
                    current={current}
                    currentItem={index}
                    currentAnswer={currentAnswer}
                    examLength={exam.length}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                );
              })}
            </duv>
          </div>
        </main>
      ) : (
        <main>
          <div className="flex justify-center">
            <div>
              <h1 className="text-center text-3xl mt-3 font-bold">
                Are You Ready ?
              </h1>
              <button
                onClick={handleStart}
                className="rounded-full bg-[#FB6D48] px-5 py-2 text-white mt-5 mx-20"
              >
                Start
              </button>
            </div>
          </div>
        </main>
      )}
    </main>
  );
};

export default Testexam;
