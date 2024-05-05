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
                <div className="mt-2">
                  <div>
                    <div>
                      <button
                        type="button"
                        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Options
                        <svg
                          class="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      class="mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                          Account settings
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                        >
                          Support
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                        >
                          License
                        </a>
                        <form method="POST" action="#" role="none">
                          <button
                            type="submit"
                            class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-3"
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
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
