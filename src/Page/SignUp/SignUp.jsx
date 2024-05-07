import React from "react";
import Logo from "../../assets/Home-Logo.png";

function SignUp() {
  return (
    <div className="flex justify-center">
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
                  <label className="text-lg font-medium">First Name</label>
                  <input
                    className="mt-1 block w-full px-5 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Firstname"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-lg font-medium">Email</label>
                  <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="mt-2">55555</div>
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
                  <label className="text-lg font-medium">Last Name</label>
                  <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Lastname"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-lg font-medium">Password</label>
                  <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-lg font-medium">Phone</label>
                  <input
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
    </div>
  );
}

export default SignUp;
