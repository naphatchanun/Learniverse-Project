import Logo from "../../assets/Home-Logo.png";
import "./signUp.css";
import { AxiosLib } from "../../lib/axiosLib";
import { useState } from "react";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await AxiosLib.post("/user/register", userData);
      if (result.status === 200) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={onFormSubmit}
      onChange={onChange}
      className="flex justify-center"
    >
      <div className="rounded-md border-2 shadow-2xl mt-20 ">
        <div className="grid grid-cols-2">
          <div className="flex justify-center bg-gradient-to-r from-[#FFEAA7] to-[#FB6D48] px-10 py-10">
            <div className="flex justify-items-center">
              <img src={Logo} alt="" className="w-[300px]" />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div className="px-5">
              <h1 className="text-2xl font-semibold">Sign Up</h1>
              <div className="mt-8">
                <div>
                  <label className="text-sm font-medium ">First Name</label>
                  <input
                    name="firstName"
                    className="mt-1 block w-full px-5 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Firstname"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium ">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Email"
                  />
                </div>
                <div>
                  <select
                    name="role"
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected disabled>
                      Choose a Role
                    </option>
                    <option value="Student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
                <div className="py-5 mt-2">
                  <button className="rounded-full bg-[#FB6D48] px-10 py-2 text-white">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-16 px-5">
                <div>
                  <label className="text-sm font-medium ">Last Name</label>
                  <input
                    name="lastName"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Lastname"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium ">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium ">Phone</label>
                  <input
                    name="phone"
                    type="number"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignUp;
