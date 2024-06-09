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
    userID: auth.userId,
    content: [],
  });
  const [numberArray, setNumberArray] = useState([]);

  const [duration, setDuration] = useState({
    hour: 0,
    minute: 0,
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    setNumberArray(Array(Number(payload.totalmark)).fill(payload.totalmark));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (duration.hour === 0 && duration.minute === 0 && duration.second === 0) {
      return Swal.fire({
        icon: "error",
        title: "Duration must be more than 0",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
      duration: `${duration.hour * 60 * 60 + duration.minute * 60}`,
    });
  }, [duration]);

  useEffect(() => {
    setPayload({ ...payload, createBy: auth.displayName });
    setPayload({ ...payload, userID: auth.userId });
  }, [auth]);
  return (
    <>
      <main className="w-screen h-full">
        <form
          className="flex flex-col items-center justify-center h-full"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md bg-gray-100 mt-10 px-10 shadow-lg">
            <h1 className="text-3xl font-bold mt-3 text-center">Create</h1>
            <div className="mt-5 shadow-xl h-10 w-30 px-3">
              <label htmlFor="label" className="px-3 text-lg">
                Exam name:
              </label>
              <input
                type="text"
                id="label"
                value={payload.label}
                className="border-2 border-gray-300 rounded-md w-80 h-8 py-3 px-2"
                onChange={handleChange}
                placeholder="Enter the name you want to set."
              />
            </div>
            <div>
              <div className="mt-5 shadow-xl h-10 w-30">
                <label htmlFor="grade" className="px-10 text-lg">
                  Grade:
                </label>
                <select
                  onChange={handleChange}
                  id="grade"
                  className="rounded-md py-1 px-2 border-2 border-gray-300 "
                >
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
              <div className="mt-5 shadow-xl h-10 w-30">
                <label htmlFor="subject" className="px-9 text-lg">
                  Subject:
                </label>
                <select
                  id="subject"
                  onChange={handleChange}
                  className="rounded-md py-1 px-2 border-2 border-gray-300 "
                >
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
              <div className="mt-5 shadow-xl h-10 w-30">
                <label htmlFor="level" className="px-11 text-lg">
                  Level:
                </label>
                <select
                  onChange={handleChange}
                  id="level"
                  className="rounded-md py-1 px-2 border-2 border-gray-300 "
                >
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
            </div>
            <div className="flex justify-start items-center mt-5 shadow-xl h-10 w-30 ">
              <label className="px-7 text-lg">Duration:</label>
              <input
                type="number"
                min={0}
                id="duration"
                value={duration.hour}
                className="border-2 border-gray-300 rounded-md py-1 px-2 p-2 w-20"
                onChange={(e) => {
                  setDuration({ ...duration, hour: e.target.value });
                }}
              />
              <label htmlFor="duration" className="px-1 text-lg">
                Hour
              </label>
              <input
                type="number"
                min={0}
                id="duration"
                value={duration.minute}
                className="border-2 border-gray-300 rounded-md py-1 px-2 w-20"
                onChange={(e) => {
                  setDuration({ ...duration, minute: e.target.value });
                }}
              />
              <label className="px-1 text-lg">Minute</label>
            </div>
            <div className="mt-5 shadow-xl h-10 w-30">
              <label htmlFor="totalmark" className="px-3 text-lg">
                Number of items:
              </label>
              <input
                type="number"
                min={1}
                required
                id="totalmark"
                placeholder="1-100"
                value={payload.totalmark}
                className="border-2 border-gray-300 rounded-md py-1 px-2 p-2 w-20"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <div className="flex justify-center mt-3">
                <div>
                  {numberArray.map((_, index) => {
                    return (
                      <div key={index} className="mt-3">
                        <label htmlFor={`question${index}`}>
                          Question: {index + 1}
                        </label>
                        <input
                          type="text"
                          id={`question${index}`}
                          required
                          placeholder="What do you want to ask?"
                          className="border border-gray-300 rounded-md py-1 px-2  w-80"
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
                              <div key={choiceIndex} className="mt-3 ">
                                <label
                                  htmlFor={`choice${index}${choiceIndex}`}
                                  className="px-2"
                                >
                                  Choice: {choiceIndex + 1}
                                </label>
                                <input
                                  type="text"
                                  required
                                  id={`choice${index}${choiceIndex}`}
                                  placeholder={`Choice ${choiceIndex + 1}`}
                                  className="border border-gray-300 rounded-md py-1 px-2  w-80"
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
                        <label htmlFor={`answer`} className="px-3">
                          Answer:
                        </label>
                        <input
                          type="number"
                          id={`answer`}
                          required
                          min={1}
                          max={4}
                          placeholder="1-4"
                          className="border border-gray-300 rounded-md py-1 px-2 my-3 w-80"
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
              </div>
            </div>
            <div className="flex justify-center mt-5 py-5">
              <button
                className="bg-[#FB6D48] text-white p-2 rounded-md w-80"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Create;
