import React from "react";

export default function login() {
  return (
    <div className="flex justify-center bg-[#FBF3D5] border rounded-md w-[800px] h-[350px] ">
      <div className="grid grid-cols-2 ">
        <div className="">
          <h1 className="py-5">Login</h1>
          <h2 className="">Does'n have an acoount yet?</h2>
          <div className="mt-2 ">
            <div>
              <label className="text-lg">Email</label>
              <input
                className="flex justify-center border rounded-md border-gray-400 h-8 w-60"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-lg">Password</label>
              <input
                className="flex justify-center border rounded-md border-gray-400 h-8 w-60"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="py-5">
              <button className="rounded-full bg-[#FB6D48] px-10 py-2 text-white">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <h2>6666</h2>
        </div>
      </div>
    </div>
  );
}
