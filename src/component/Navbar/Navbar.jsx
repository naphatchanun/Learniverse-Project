import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Home-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/user";
import { AxiosLib } from "../../lib/axiosLib";

function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      const result = await AxiosLib.post("/user/logout");
      if (result.status === 200) {
        navigate(0);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="bg-[#FB6D48] ">
      <div className="flex justify-between items-ceneter w-[92%]">
        <div className="px-28">
          <Link
            to="/"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page"
          >
            <img src={Logo} alt="" className="w-28" />
          </Link>
        </div>
        <div className="flex justify-center">
          <ul className="flex items-center gap-[4vw] text-xl">
            <li>
              <Link
                to="/play"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Play
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Create
              </Link>
            </li>
            {auth.isLogin ? (
              <>
                <div>
                  <Link to="/Account">
                    <div className="border rounded-md bg-[#F2F1EB] px-3 py-1">
                      {auth.displayName}
                    </div>
                  </Link>
                </div>
                <div onClick={onLogout} className="text-white">
                  Logout
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link
                    to="/login"
                    // class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    className="border rounded-md bg-[#FBF3D5] px-3 py-1"
                  >
                    Login
                  </Link>
                </div>
                <div>
                  <Link
                    to="/signup"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sign Up
                  </Link>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
