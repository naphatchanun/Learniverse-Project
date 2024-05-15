import Bio from "../../assets/bio.png";
function play() {
  return (
    <main>
      <div className="flex justify-center mt-20">
        <h2 className="font-semibold text-5xl">
          Welcome to the world of learning.
        </h2>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex justify-end mt-9">
          <select
            name="role"
            id="underline_select"
            className="mt-1 block w-full w-1/2 h-10 px-3 py-2 bg-[#FBF3D5] rounded-md text-sm shadow-sm "
          >
            <option selected disabled>
              Grade
            </option>
            <option value="Student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="mt-9">
          <div>
            <div className="flex justify-center">
              <select
                name="role"
                id="underline_select"
                className="mt-1 block w-full w-1/2 px-3 py-2 bg-[#FBF3D5] rounded-md text-sm shadow-sm  "
              >
                <option selected disabled>
                  Subject
                </option>
                <option value="Student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <div className="flex justify-center mt-10">
              <button className="rounded-full bg-[#FB6D48] px-10 py-2 text-white">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-9">
          <select
            name="role"
            id="underline_select"
            className="mt-1 block w-full w-1/2 h-10 px-3 py-2 bg-[#FBF3D5] rounded-md text-sm shadow-sm 
                    "
          >
            <option selected disabled>
              Level
            </option>
            <option value="Student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-20">
          <h1 className="font-semibold text-2xl">Popular Mode</h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex justify-end">
            <div className="border rounded-md mt-10 w-2/3 bg-[#FBF3D5] transition ease-in-out delay-100  bg-[#FBF3D5] hover:-translate-y-1 hover:scale-110 hover:bg-[#FB6D48] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Bio} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div>5555555</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border rounded-md mt-10 w-2/3 bg-[#FBF3D5] transition ease-in-out delay-100  bg-[#FBF3D5] hover:-translate-y-1 hover:scale-110 hover:bg-[#FB6D48] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Bio} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div>5555555</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border rounded-md mt-10 w-2/3 bg-[#FBF3D5] transition ease-in-out delay-100  bg-[#FBF3D5] hover:-translate-y-1 hover:scale-110 hover:bg-[#FB6D48] duration-200 ">
              <div className="grid grid-cols-2">
                <img src={Bio} alt="" className="h-2/2 w-2/3 mt-2 px-2" />
                <div className="flex items-center justify-center">
                  <div>5555555</div>
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
