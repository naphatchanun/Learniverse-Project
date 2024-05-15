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
                className=" mt-1 block w-full w-1/2 px-3 py-2 bg-[#FBF3D5] rounded-md text-sm shadow-sm "
                placeholder="Enter your Password"
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
    </main>
  );
}

export default play;
