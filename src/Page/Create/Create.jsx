import { Footer } from "../../component/Footer/footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/user";
import { GradeContext, LevelContext, SubjectContext } from "../../context/exam";
import { AxiosLib } from "../../lib/axiosLib";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const auth = useContext(AuthContext);
  const Navigate = useNavigate();
  const [payload, setPayload] = useState({
    label: "",
    grade: "",
    subject: "",
    level: "",
    totalmark: "",
    duration: "",
    createBy: auth.displayName,
    content: [],
  });
  const [numberArray, setNumberArray] = useState([]);

  const [duration, setDuration] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    setNumberArray(Array(Number(payload.totalmark)).fill(payload.totalmark));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await AxiosLib.post("/user/createExam", payload);
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Create exam success",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate("/Account");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setPayload({ ...payload, content: [] });
    setNumberArray(Array(Number(payload.totalmark)).fill(payload.totalmark));
  }, [payload.totalmark]);

  useEffect(() => {
    setPayload({
      ...payload,
      duration: `${
        duration.hour * 60 * 60 + duration.minute * 60 + Number(duration.second)
      }`,
    });
  }, [duration]);

  useEffect(() => {
    setPayload({ ...payload, createBy: auth.displayName });
  }, [auth]);
  return (
    <>
      <main className="w-screen h-full">
        <form
          className="flex flex-col items-center justify-center h-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold">Create</h1>
          <div>
            <label htmlFor="label">Exam name</label>
            <input
              type="text"
              id="label"
              value={payload.label}
              className="border border-gray-300 rounded-md p-2 w-80"
              onChange={handleChange}
              placeholder="Nextjs for 3 year old  kid 101"
            />
          </div>
          <div>
            <label htmlFor="grade">Grade</label>
            <select onChange={handleChange} id="grade">
              <option disabled selected>
                Select Grade
              </option>
              {GradeContext.map((grade) => {
                return (
                  <option key={grade} value={grade}>
                    Secondary {grade - 6}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <select id="subject" onChange={handleChange}>
              <option disabled selected>
                Select Subject
              </option>
              {SubjectContext.map((subject) => {
                return (
                  <option key={subject.id} value={subject.name}>
                    {subject.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="level">Level</label>
            <select onChange={handleChange} id="level">
              <option disabled selected>
                Select Level
              </option>
              {LevelContext.map((level) => {
                return (
                  <option key={level.id} value={level.name}>
                    {level.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex">
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              min={0}
              id="duration"
              value={duration.hour}
              className="border border-gray-300 rounded-md p-2 w-20"
              onChange={(e) => {
                setDuration({ ...duration, hour: e.target.value });
              }}
            />
            <input
              type="number"
              min={0}
              id="duration"
              value={duration.minute}
              className="border border-gray-300 rounded-md p-2 w-20"
              onChange={(e) => {
                setDuration({ ...duration, minute: e.target.value });
              }}
            />
            <input
              type="number"
              min={0}
              id="duration"
              value={duration.second}
              className="border border-gray-300 rounded-md p-2 w-20"
              onChange={(e) => {
                setDuration({ ...duration, second: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="totalmark">Number of items</label>
            <input
              type="number"
              min={1}
              required
              id="totalmark"
              value={payload.totalmark}
              className="border border-gray-300 rounded-md p-2 w-80"
              onChange={handleChange}
            />
          </div>
          <div>
            {numberArray.map((_, index) => {
              return (
                <div key={index}>
                  <label htmlFor={`question${index}`}>
                    Question {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`question${index}`}
                    className="border border-gray-300 rounded-md p-2 w-80"
                    onChange={(e) => {
                      const content = [...payload.content];
                      content[index] = {
                        question: e.target.value,
                        choice: [],
                        answer: "",
                      };
                      setPayload({ ...payload, content });
                    }}
                  />
                  {Array(4)
                    .fill(1)
                    .map((_, choiceIndex) => {
                      return (
                        <div key={choiceIndex}>
                          <label htmlFor={`choice${index}${choiceIndex}`}>
                            Choice {choiceIndex + 1}
                          </label>
                          <input
                            type="text"
                            id={`choice${index}${choiceIndex}`}
                            className="border border-gray-300 rounded-md p-2 w-80"
                            onChange={(e) => {
                              const content = [...payload.content];
                              content[index].choice[choiceIndex] = {
                                [choiceIndex + 1]: e.target.value,
                              };
                              setPayload({ ...payload, content });
                            }}
                          />
                        </div>
                      );
                    })}
                  <label htmlFor={`answer`}>Answer</label>
                  <input
                    type="text"
                    id={`answer`}
                    className="border border-gray-300 rounded-md p-2 w-80"
                    onChange={(e) => {
                      const content = [...payload.content];
                      content[index].answer = e.target.value;
                      setPayload({ ...payload, content });
                    }}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md w-80"
            type="submit"
          >
            Create
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Create;

// [
//   {
//     label: "test1",
//     grade: "7",
//     subject: "math",
//     level: "3",
//     totalmark: "5",
//     duration: "180000",
//     createBy: "Learniverse",
//     content: [
//       {
//         question: "ถ้า x+3 = 2(x-1) เเล้วค่า x เป็นเท่าใด?",
//         choice: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "5" }],
//         answer: "4",
//       },
//       {
//         question: "ผลบวกของจำนวนเต็มคู่ 5 จำนวนแรกคือเท่าใด?",
//         choice: [{ 1: "20" }, { 2: "30" }, { 3: "40" }, { 4: "50" }],
//         answer: "2",
//       },
//       {
//         question:
//           "ถ้าสามเหลี่ยม ABC มีมุม A = 40 องศา และมุม B = 60 องศา มุม C จะมีขนาดเท่าใด?",
//         choice: [
//           { 1: "40 องศา" },
//           { 2: "60 องศา" },
//           { 3: "80 องศา" },
//           { 4: "100 องศา" },
//         ],
//         Answer: "3",
//       },
//       {
//         question:
//           "ถ้าจำนวนเต็ม a หารด้วย 4 เหลือเศษ 3 และจำนวนเต็ม b หารด้วย 4 เหลือเศษ 1 แล้ว a+b หารด้วย 4 จะเหลือเศษเท่าใด?",
//         choice: [{ 1: "0" }, { 2: "1" }, { 3: "2" }, { 4: "3" }],
//         Answer: "1",
//       },
//       {
//         question: "ถ้าจำนวนเต็ม k เป็นจำนวนเฉพาะ และ 2<k<10 จงหาค่า k",
//         choice: [
//           { 1: "3,5,8" },
//           { 2: "3,5,7" },
//           { 3: "4,5,7" },
//           { 4: "5,4,7" },
//         ],
//         Answer: "2",
//       },
//     ],
//   },
// ];
