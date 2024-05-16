import react from "react";
import Logo from "../../assets/Home-Logo.png";
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
      <div className="rounded-md border-2 shadow-2xl mt-20 w-[700px]">
        <div className="grid grid-cols-2 ">
          <div className="px-10 py-10 ">
            <h1 className="text-2xl font-semibold font-serif">Login</h1>
            <p className="text-black self-center flex gap-1 mt-4 font-serif">
              Doesn&apos;t have an account yet?
              <a className="text-[#FB6D48] underline font-serif" href="/SignUp">
                Sign Up
              </a>
            </p>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium font-serif">Email</label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-lg font-medium font-serif">
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
              <button className="mt-3 font-medium text-base text-violet-500 font-serif">
                Forget password
              </button>
              <div className="py-5">
                <button className="rounded-full bg-[#FB6D48] px-10 py-2 text-white font-serif">
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
    </form>
  );
};

export default login;
