import Bio from "../../assets/bio.png";
import Chemi from "../../assets/chemi.png";
import Math from "../../assets/math.png";
import { Link } from "react-router-dom";
function play() {
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
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Grade</option>
                <option>มัธยมศึกษาปีที่ 1</option>
                <option>มัธยมศึกษาปีที่ 2</option>
                <option>มัธยมศึกษาปีที่ 3</option>
                <option>มัธยมศึกษาปีที่ 4</option>
                <option>มัธยมศึกษาปีที่ 5</option>
                <option>มัธยมศึกษาปีที่ 6</option>
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
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Subject</option>
                  <option>Mathematics</option>
                  <option>Cemical</option>
                  <option>Biology</option>
                  <option>Physical</option>
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
                <button className="rounded-full bg-[#FB6D48] px-10 py-2 text-white font-serif">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-start mt-9">
            <div className="inline-block relative w-64">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Level</option>
                <option>Easy</option>
                <option>Normal</option>
                <option>Diffucult</option>
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
