import React, { useContext, useEffect } from "react";
import { AxiosLib } from "../../lib/axiosLib";
import { AuthContext } from "../../context/user";

const ExamStorage = () => {
  const auth = useContext(AuthContext);

  const [myExam, setMyExam] = React.useState([]);

  const fetchMyExam = async () => {
    try {
      const result = await AxiosLib.get(`/user/myExam/${auth.userId}`);
      setMyExam(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyExam();
    console.log(myExam);
  }, [auth]);

  return (
    <>
      <main className="flex justify-center items-center">
        <div className="border rounded-md w-auto px-3 h-auto mt-10">
          <h1 className="text-2xl font-bold inderline mt-8 text-center">
            Play History
          </h1>
          <div className="grid md:grid-cols-[3fr_3fr_3fr_3fr_3fr] grid-cols-5 flex space-x-3 mt-5">
            <h1 className="text-[#FB6D48] text-lg font-bold text-center">
              Exam
            </h1>
            <h1 className="text-[#FB6D48] text-lg font-bold text-center">
              Subject
            </h1>
            <h1 className="text-[#FB6D48] text-lg font-bold text-center">
              Level
            </h1>
            <h1 className="text-[#FB6D48] text-lg font-bold text-center">
              Score
            </h1>
            <h1 className="text-[#FB6D48] text-lg font-bold text-center">
              Date
            </h1>
          </div>
          {myExam.map((item, index) => {
            return (
              <div className="rounded-md bg-gray-200 mt-3" key={index}>
                <div className="grid md:grid-cols-[3fr_3fr_3fr_3fr-3fr] grid-cols-5 space-x-3">
                  <div className="flex justify-center  px-2 py-2">Hello</div>
                  <div className="flex justify-center  px-2 py-2 ">world</div>
                  <div className="flex justify-center  px-2 py-2 ">eiei</div>
                  <div className="flex justify-center  px-2 py-2 ">test</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ExamStorage;
