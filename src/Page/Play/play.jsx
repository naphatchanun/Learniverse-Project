/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import Bio from "../../assets/bio.png";
import Chemi from "../../assets/chemi.png";
import Math from "../../assets/math.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AxiosLib } from "../../lib/axiosLib";
import { AuthContext } from "../../context/user";

function play() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [grade, setGrade] = useState({
    grade: "",
    subject: "",
    level: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setGrade((prev) => ({ ...prev, [name]: value }));
  };

  const handleJoin = async (e) => {
    e.preventDefault();
    if (grade.grade === "" || grade.subject === "" || grade.level === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select all the options",
      });
    }
    try {
      const response = await AxiosLib.post("/exam/exam", grade);
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
    if (!auth.email) {
      navigate("/login");
    }
  }, []);

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
                <option selected disabled>
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
                  <option selected disabled>
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
            <div className="flex justify-center mt-10">
              <Link to="/testexam">
                <button
                  onClick={handleJoin}
                  className="rounded-full bg-[#FB6D48] px-10 py-2 text-white font-serif"
                >
                  Join
                </button>
              </Link>
            </div>
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
                <option selected disabled>
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
      <div>
        <div className="flex justify-start px-40 mt-10">
          <h1 className="font-semibold text-2xl font-serif">Popular Mode</h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex justify-end">
            <div className="border-4 rounded-md mt-5 w-2/3 transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Bio} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div className="mt-2">
                    Subject:Biology <br />
                    Grade:มัธยมศึกษาปีที่ 4 <br />
                    Level:Normal <br />
                    <button className="rounded-full bg-[#FB6D48] px-8 py-2 text-white font-serif mt-2">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-4 rounded-md mt-5 w-2/3 transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Math} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div className="mt-2">
                    Subject:Mathematics <br />
                    Grade:มัธยมศึกษาปีที่ 5 <br />
                    Level:Normal <br />
                    <button className="rounded-full bg-[#FB6D48] px-8 py-1 text-white font-serif mt-2">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border-4 rounded-md mt-5 w-2/3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Chemi} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div className="mt-2">
                    Subject:Chemical <br />
                    Grade:มัธยมศึกษาปีที่ 6 <br />
                    Level:Normal <br />
                    <button className="rounded-full bg-[#FB6D48] px-8 py-2 text-white font-serif mt-2 ">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex justify-end">
            <div className="border-4 rounded-md mt-5 w-2/3 transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Bio} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div className="mt-2">
                    Subject:Biology <br />
                    Grade:มัธยมศึกษาปีที่ 1 <br />
                    Level:Normal <br />
                    <button className="rounded-full bg-[#FB6D48] px-8 py-2 text-white font-serif mt-2">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-4 rounded-md mt-5 w-2/3 transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Bio} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div className="mt-2">
                    Subject:Biology <br />
                    Grade:มัธยมศึกษาปีที่ 1 <br />
                    Level:Normal <br />
                    <button className="rounded-full bg-[#FB6D48] px-8 py-2 text-white font-serif mt-2">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border-4 rounded-md mt-5 w-2/3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Bio} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div className="mt-2">
                    Subject:Biology <br />
                    Grade:มัธยมศึกษาปีที่ 1 <br />
                    Level:Normal <br />
                    <button className="rounded-full bg-[#FB6D48] px-8 py-2 text-white font-serif mt-2">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default play;
