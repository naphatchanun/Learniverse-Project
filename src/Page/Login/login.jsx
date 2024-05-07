import React from "react";
import Logo from "../../assets/Home-Logo.png";

export default function login() {
  return (
    <div className="flex justify-center ">
      <div className="rounded-md border-2 shadow-2xl mt-20 w-[700px]">
        <div className="grid grid-cols-2 ">
          <div className="px-10 py-10 ">
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-black self-center flex gap-1 mt-4">
              Doesn't have an account yet?
              <a className="text-[#FB6D48] underline" href="/Sign-Up">
                Sign Up
              </a>
            </p>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Password</label>
                <input
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  placeholder="Enter your password"
                />
              </div>
              <button className="mt-3 font-medium text-base text-violet-500">
                Forget password
              </button>
              <div className="py-5">
                <button className="rounded-full bg-[#FB6D48] px-10 py-2 text-white">
                  Log in
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-gradient-to-r from-[#FFEAA7] to-[#FB6D48] ">
            <div className="flex items-center">
              <img src={Logo} alt="" className="w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
