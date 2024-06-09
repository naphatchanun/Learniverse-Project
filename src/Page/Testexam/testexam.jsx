import { useEffect, useState } from "react";
import { AxiosLib } from "../../lib/axiosLib";
import { useNavigate, useParams } from "react-router-dom";
import Exam from "../../component/Exam/Exam";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../context/user";
import { calcurateScore } from "../../util/calcurateScore";
import { Footer } from "../../component/Footer/footer";
import { Link } from "react-router-dom";
// import About1 from "../../assets/about1.png";

const Testexam = () => {
  const auth = useContext(AuthContext);
  const examID = useParams();
  const Navigate = useNavigate();

  const [exam, setExam] = useState([]);
  const [current, setCurrent] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const correctAnswer = exam.map((item) => item);
  const payload = {
    answer: currentAnswer,
    examID: examID.examID,
    userID: auth.userId,
    correctAnswer: correctAnswer.map((item) => item.answer),
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
        const result = await AxiosLib.post("/exam/submit", payload);
        console.log(result);
        if (result.status === 200) {
          Navigate(`/testexam/result/${examID.examID}`, {
            state: { payload: payload },
          });
        }
      }
    });
  };

  useEffect(() => {
    fetchExam();
  }, []);

  return (
    <main>
      <div className="">
        <div className="flex justify-center py-20 ">
          <div className="grid md:md:grid-cols-[6fr_2fr] grid-cols-2">
            <div className="rounded-md border-2 shadow-xl w-[800px] h-[350px] px-10 bg-white">
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
            </div>
            <div className="flex justify-center">
              <div className="rounded-md bg-[#FBF3D5] w-72 h-[500px]">
                <h1 className="text-center text-2xl mt-2 font-bold">
                  หมวดท้าทาย
                </h1>
                <div className="grid md:md:grid-rows-[3fr_3fr_3fr_3fr] grid-rows-4">
                  <div className="flex justify-center">
                    <Link to="/Play" className="flex items-center">
                      <div className="rounded-md bg-white w-56 h-24 mt-3 hover:bg-[#FB6D48] hover:text-white">
                        <h1 className="text-center text-xl mt-4 font-bold">
                          Mathematic
                        </h1>
                        <h2 className="text-center text-lg">Level:Difficult</h2>
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <Link to="/Play" className="flex items-center">
                      <div className="rounded-md bg-white w-56 h-24 mt-3 hover:bg-[#FB6D48] hover:text-white">
                        <h1 className="text-center text-xl mt-4 font-bold">
                          Biology
                        </h1>
                        <h2 className="text-center text-lg">Level:Difficult</h2>
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <Link to="/Play" className="flex items-center">
                      <div className="rounded-md bg-white w-56 h-24 mt-3 hover:bg-[#FB6D48] hover:text-white">
                        <h1 className="text-center text-xl mt-4 font-bold">
                          Chemical
                        </h1>
                        <h2 className="text-center text-lg">Level:Difficult</h2>
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <Link to="/Play" className="flex items-center">
                      <div className="rounded-md bg-white w-56 h-24 mt-3 hover:bg-[#FB6D48] hover:text-white">
                        <h1 className="text-center text-xl mt-4 font-bold">
                          Physical
                        </h1>
                        <h2 className="text-center text-lg">Level:Difficult</h2>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex justify-center mt-3">
                  <div className="grid md:md:grid-rows-[3fr_3fr_3fr_3fr] grid-rows-4">
                    <div className="rounded-md bg-[#FBF3D5] w-56 h-24 mt-3 border-4 border-[#FB6D48] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                      <h1 className="text-center text-xl mt-3">คณิตศาสตร์</h1>
                      <h2 className="text-center text-lg">ระดับยาก</h2>
                    </div>
                    <div className="rounded-md bg-[#FBF3D5] w-56 h-24 mt-3 border-4 border-[#FB6D48] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                      <h1 className="text-center text-xl mt-3">คณิตศาสตร์</h1>
                      <h2 className="text-center text-lg">ระดับยาก</h2>
                    </div>
                    <div className="rounded-md bg-[#FBF3D5] w-56 h-24 mt-3 border-4 border-[#FB6D48] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                      <h1 className="text-center text-xl mt-3">คณิตศาสตร์</h1>
                      <h2 className="text-center text-lg">ระดับยาก</h2>
                    </div>
                    <div className="rounded-md bg-[#FBF3D5] w-56 h-24 mt-3 border-4 border-[#FB6D48] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                      <h1 className="text-center text-xl mt-3">คณิตศาสตร์</h1>
                      <h2 className="text-center text-lg">ระดับยาก</h2>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-[4fr_4fr_4fr] grid-col-3">
          <div className="flex justify-center">
            <img src={About1} alt="" className="w-36" />
          </div>
          <div className="flex justify-center">
            <img src={About1} alt="" className="w-36" />
          </div>
          <div className="flex justify-center">
            <img src={About1} alt="" className="w-36" />
          </div>
        </div> */}
      </div>
      {/* <div className="bg-[#] mt-20">
        <div className="grid md:grid-cols-[4fr_4fr] grid-cols- mt-10">
          <div className="flex justify-end items-center">
            <div className="border-4 rounded-md bg-white px-10 w-2/3 py-3 shadow-lg">
              <div className="flex justify-center"></div>
              <h1 className="flex justify-center text-center mt-3">
                คณิตศาสตร์
              </h1>
              <h1 className="flex justify-center text-center mt-3">
                เป็นวิชาที่ศึกษาเกี่ยวกับจำนวน โครงสร้าง รูปทรง
                และการเปลี่ยนแปลง
                โดยเป็นศาสตร์ที่เกี่ยวข้องกับการหากฎเกณฑ์และรูปแบบต่าง ๆ
                ในเชิงปริมาณและเชิงคุณภาพ หลักการพื้นฐานในคณิตศาสตร์ได้แก่
                การบวก การลบ การคูณ การหาร
              </h1>
            </div>
          </div>
          <div className="flex justify-start ">
            <div className="border-4 rounded-md bg-white px-10 w-2/3 py-3 shadow-lg">
              <div className="flex justify-center "></div>
              <div className="flex justify-center text-center mt-3">
                วัดเเละประเมินการเรียนรู้ของตัวเอง
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </main>
  );
};

export default Testexam;

// CSS อันเก่า
{
  /* <div key={index} className="flex justify-center mt-20">
  <div className="border-4 rounded-md border-[#FB6D48] w-auto h-auto">
    <h1 className="flex justify-center font-semibold text-xl mt-3 font-serif">
      Question 1
    </h1>
    <h2 className="mt-7 px-10 text-lg ">{item.question}</h2>
    <div className="px-10 mt-5 py-3">
      <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 text-sm hover:border-[#FB6D48] border-2">
        1.{item.choice[0]}
      </div>
      <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
        2.{item.choice[1]}
      </div>
      <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
        3.{item.choice[2]}
      </div>
      <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
        4.{item.choice[3]}
      </div>
    </div>
<div className="grid grid-cols-2 py-3">
  <div className="flex justify-end">
    <button
      onClick={handleBack}
      className="rounded-full bg-[#DDDDDD] px-5 py-2 text-white "
    >
      Back
    </button>
  </div>
  <div className="flex justify-start px-2">
    <button
      onClick={handleNext}
      className="rounded-full bg-[#FB6D48] px-5 py-2 text-white"
    >
      Next
    </button>
  </div>
</div>
  </div>
</div> */
}
