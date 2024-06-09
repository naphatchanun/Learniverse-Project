import { useEffect, useState } from "react";
import { AxiosLib } from "../../lib/axiosLib";
import { useNavigate, useParams } from "react-router-dom";
import Exam from "../../component/Exam/Exam";
import Swal from "sweetalert2";
import { useContext } from "react";
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
    fetchExam();
  }, []);

  useEffect(() => {
    if (timer >= 0 && isStart) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
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
  }, [timer, isStart]);

  return (
    <main className="flex justify-center mt-20">
      {isStart ? (
        <main>
          <div>Timer : {timer}</div>
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
        </main>
      ) : (
        <main>
          <div className="flex justify-center">
            <button
              onClick={handleStart}
              className="rounded-full bg-[#FB6D48] px-5 py-2 text-white"
            >
              Start
            </button>
          </div>
        </main>
      )}
    </main>
  );
};

export default Testexam;

// CSS อันเก่า
// <div key={index} className="flex justify-center mt-20">
//   <div className="border-4 rounded-md border-[#FB6D48] w-auto h-auto">
//     <h1 className="flex justify-center font-semibold text-xl mt-3 font-serif">
//       Question 1
//     </h1>
//     <h2 className="mt-7 px-10 text-lg ">{item.question}</h2>
//     <div className="px-10 mt-5 py-3">
//       <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 text-sm hover:border-[#FB6D48] border-2">
//         1.{item.choice[0]}
//       </div>
//       <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
//         2.{item.choice[1]}
//       </div>
//       <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
//         3.{item.choice[2]}
//       </div>
//       <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
//         4.{item.choice[3]}
//       </div>
//     </div>
// <div className="grid grid-cols-2 py-3">
//   <div className="flex justify-end">
//     <button
//       onClick={handleBack}
//       className="rounded-full bg-[#DDDDDD] px-5 py-2 text-white "
//     >
//       Back
//     </button>
//   </div>
//   <div className="flex justify-start px-2">
//     <button
//       onClick={handleNext}
//       className="rounded-full bg-[#FB6D48] px-5 py-2 text-white"
//     >
//       Next
//     </button>
//   </div>
// </div>
//   </div>
// </div>
