import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Home-Logo.png";

function Navbar() {
  return (
    <nav className="bg-[#FB6D48] ">
      <div className="flex justify-between items-ceneter w-[92%]">
        <div className="">
          <img src={Logo} alt="" className="w-[100px]" />
        </div>
        <div className="flex justify-center">
          <ul className="flex items-center gap-[4vw] text-xl">
            <li>
              <Link
                to="/Firsthome"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/play"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Play
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="rounded-full bg-[#FBF3D5] px-5 py-2 text-xl">
            Log in
          </button>
          <li className="flex items-center px-10  text-xl">
            <Link
              to="/play"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Sing Up
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
