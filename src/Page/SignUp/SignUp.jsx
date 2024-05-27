import Sign from "../../assets/signup.png";
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
      <div className="grid grid-cols-2 mt-10">
        <div className="flex justify-center">
          <div className="flex justify-items-center px-20">
            <div className="rounded-md border-2 shadow-2xl w-[350px]">
              <div className="px-5">
                <h1 className="text-2xl font-semibold font-serif mt-5">
                  Sign Up
                </h1>
                <div className="mt-3">
                  <div>
                    <label className="text-sm font-medium font-sans">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      className="mt-1 block w-full px-5 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder="Enter your Firstname"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium font-sans">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder="Enter your Lastname"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-sm font-medium font-sans">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder="name@mail.com"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-sm font-medium font-sans">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder="************"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-sm font-medium font-sans">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="number"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder="XXX-XXXXXXX"
                    />
                  </div>
                  <div className="py-3 mt-2">
                    <button className="rounded-md bg-[#FB6D48] px-10 py-2 text-white font-sans w-full">
                      Sign Up
                    </button>
                  </div>
                  <p className="block py-2 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                    Already have an account?
                    <a href="/Login" className="font-medium text-[#FB6D48]">
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center">
            <img src={Sign} alt="" className="w-5/6 h-3/5" />
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignUp;
