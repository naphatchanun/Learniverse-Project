import react from "react";
import Log from "../../assets/login.png";
import { AxiosLib } from "../../lib/axiosLib";

const login = () => {
  const [userData, setUserData] = react.useState({
    email: "",
    password: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await AxiosLib.post("/user/login", userData);
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
      onChange={onChange}
      onSubmit={onFormSubmit}
      className="flex justify-center "
    >
      <div className="grid grid-cols-2 mt-10">
        <div className="flex justify-center">
          <div className="flex justify-items-center px-20">
            <div className="rounded-md border-2 shadow-2xl w-[350px]">
              <div className="px-5">
                <h1 className="text-2xl font-semibold font-serif mt-9">
                  Login
                </h1>
                <p className="text-black self-center flex gap-1 mt-4 font-serif">
                  Doesn&apos;t have an account yet?
                  <a
                    className="text-[#FB6D48] underline font-sans font-medium"
                    href="/SignUp"
                  >
                    Sign Up
                  </a>
                </p>
                <div className="mt-3">
                  <div>
                    <label className="text-sm font-medium font-sans ">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="text-sm font-medium font-sans">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder="Enter your password"
                    />
                  </div>
                  {/* <button className="mt-3 font-medium text-base text-violet-500 font-sans ">
                    Forget password
                  </button> */}
                  <div className="py-3 mt-2">
                    <button className="rounded-md bg-[#FB6D48] px-10 py-2 text-white font-sans w-full">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center">
            <img src={Log} alt="" className="w-[550px] h-[400px]" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default login;
