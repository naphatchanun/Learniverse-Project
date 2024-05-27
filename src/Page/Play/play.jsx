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
        <div className="flex justify-end mt-9">
          <select
            name="role"
            id="underline_select"
            className="mt-1 block w-1/2 h-10 px-3 py-2 bg-[#FBF3D5] rounded-md text-sm shadow-sm font-serif"
          >
            <option selected disabled>
              Grade
            </option>
            <option value="มัธยมศึกษาปีที่ 1">มัธยมศึกษาปีที่ 1</option>
            <option value="มัธยมศึกษาปีที่ 2">มัธยมศึกษาปีที่ 2</option>
            <option value="มัธยมศึกษาปีที่ 3">มัธยมศึกษาปีที่ 3</option>
            <option value="ธยมศึกษาปีที่ 4">มัธยมศึกษาปีที่ 4</option>
            <option value="มัธยมศึกษาปีที่ 5">มัธยมศึกษาปีที่ 5</option>
            <option value="มัธยมศึกษาปีที่ 6">มัธยมศึกษาปีที่ 6</option>
          </select>
        </div>
        <div className="mt-9">
          <div>
            <div className="flex justify-center">
              <select
                name="role"
                id="underline_select"
                className="mt-1 block w-1/2 px-3 py-2 bg-[#FBF3D5] rounded-md text-sm shadow-sm font-serif "
              >
                <option selected disabled>
                  Subject
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Biology">Biology</option>
                <option value="Chemical">Chemical</option>
                <option value="Physical">Physical</option>
              </select>
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
        <div className="flex justify-start mt-9">
          <select
            name="role"
            id="underline_select"
            className="mt-1 block  w-1/2 h-10 px-3 py-2 bg-[#FBF3D5] rounded-md text-sm shadow-sm font-serif
                    "
          >
            <option selected disabled>
              Level
            </option>
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Difficult">Difficult</option>
          </select>
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
