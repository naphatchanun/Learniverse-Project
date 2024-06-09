/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import Bio from "../../assets/bio.png";
import Chemi from "../../assets/chemi.png";
import Math from "../../assets/math.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AxiosLib } from "../../lib/axiosLib";
import { AuthContext } from "../../context/user";

import { Footer } from "../../component/Footer/footer";
function play() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [grade, setGrade] = useState({
    grade: "all",
    subject: "all",
    level: "all",
  });
  const [examList, setExamList] = useState([]);

  const fetchExamList = async () => {
    try {
      const response = await AxiosLib.get("/exam/exam/");
      if (response.status === 200) {
        setExamList(response.data);
        console.log(response.data[0]._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const levelText = (level) => {
    switch (level) {
      case "1":
        return "Easy";
      case "2":
        return "Normal";
      case "3":
        return "Diffucult";
      default:
        return "Unknow";
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setGrade((prev) => ({ ...prev, [name]: value }));
  };

  const handleJoin = async (id) => {
    try {
      const response = await AxiosLib.post("/exam/exam", id);
      if (response.status === 200) {
        navigate(`/testexam/${response.data._id}`);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data || "Something went wrong!",
      });
    }
  };
  useEffect(() => {
    fetchExamList();
  }, []);
  useEffect(() => {
    console.log(grade);
  }, [grade]);

  return (
    <main>
      <div className="flex justify-center mt-20">
        <h2 className="font-semibold text-5xl font-serif">
          Welcome to the world of learning.
        </h2>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <div className="flex justify-end mt-9">
            <div className="inline-block relative w-64">
              <select
                name="grade"
                onChange={handleOnChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option selected value="all">
                  Grade
                </option>
                <option value="7">มัธยมศึกษาปีที่ 1</option>
                <option value="8">มัธยมศึกษาปีที่ 2</option>
                <option value="9">มัธยมศึกษาปีที่ 3</option>
                <option value="10">มัธยมศึกษาปีที่ 4</option>
                <option value="11">มัธยมศึกษาปีที่ 5</option>
                <option value="12">มัธยมศึกษาปีที่ 6</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9">
          <div>
            <div className="flex justify-center">
              <div className="inline-block relative w-64">
                <select
                  name="subject"
                  onChange={handleOnChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option selected value="all">
                    Subject
                  </option>
                  <option value="math">Mathematics</option>
                  <option value="chem">Chemical</option>
                  <option value="bio">Biology</option>
                  <option value="phy">Physical</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center mt-10">
              <Link to="/testexam">
                <button
                  onClick={handleFilter}
                  className="rounded-full bg-[#FB6D48] px-10 py-2 text-white font-serif"
                >
                  Join
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <div>
          <div className="flex justify-start mt-9">
            <div className="inline-block relative w-64">
              <select
                name="level"
                onChange={handleOnChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option selected value="all">
                  Level
                </option>
                <option value="1">Easy</option>
                <option value="2">Normal</option>
                <option value="3">Diffucult</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-10 flex-col">
        <h1 className="text-center text-2xl font-bold">Exam List</h1>
        <main className="flex justify-center items-center flex-col ">
          <div className="grid grid-cols-7 w-3/4 text-center place-items-center">
            <div className="text-[#FB6D48] text-lg font-bold">No.</div>
            <div className="text-[#FB6D48] text-lg font-bold">Exam Name</div>
            <div className="text-[#FB6D48] text-lg font-bold">Subject</div>
            <div className="text-[#FB6D48] text-lg font-bold">Grade</div>
            <div className="text-[#FB6D48] text-lg font-bold">Level</div>
            <div className="text-[#FB6D48] text-lg font-bold">Create by</div>
          </div>
          {examList.map((item, index) => {
            if (
              (grade.grade !== "all" && item.grade !== grade.grade) ||
              (grade.subject !== "all" && item.subject !== grade.subject) ||
              (grade.level !== "all" && item.level !== grade.level)
            ) {
              return null;
            }
            return (
              <div
                key={index}
                className="grid grid-cols-7 w-3/4 text-center place-items-center h-10 py-2 border-b-2 border-[#FB6D48]"
              >
                <div>{index + 1}</div>
                <div>{item.label}</div>
                <div>{item.subject}</div>
                <div>{item.grade}</div>
                <div>{levelText(item.level)}</div>
                <div>{item.createBy}</div>
                <button
                  className="rounded-2xl bg-[#FB6D48] text-white w-1/2 h-full py-1 "
                  onClick={() => {
                    handleJoin(item._id);
                  }}
                >
                  Join
                </button>
              </div>
            );
          })}
        </main>
      </div>
      <Footer />
    </main>
  );
}

export default play;
