import { Link } from "react-router-dom";
import Logo from "../../assets/Home-Logo.png";

export const Footer = () => {
  return (
    <footer className="hidden md:grid mt-10">
      <div className="bg-[#FB6D48]">
        <div className="grid grid-cols-[6fr_2fr_2fr_1fr]">
          <div className="flex items-center px-10 ">
            <img
              src={Logo}
              alt="Logo"
              className="ml-16 w-36 object-cover my-3"
            />
          </div>
          <div className="flex my-4 justify-center">
            <ul>
              <Link to="/">
                <h1
                  className="font-bold text-lg group transition duration-300 w-fit"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Main menu
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FBF3D5]"></span>
                </h1>
              </Link>
              <Link to="/Create">
                <li className="group transition duration-300 w-fit text-white">
                  Create
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FBF3D5]"></span>
                </li>
              </Link>
              <Link to="/play">
                <li className="group transition duration-300 w-fit text-white">
                  Play
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FBF3D5]"></span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex my-4 justify-center items-center">
            <ul>
              <h1 className="font-bold text-lg ">Subject</h1>
              <li className="group transition duration-300 w-fit text-white">
                Mathematics
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FBF3D5]"></span>
              </li>
              <li className="group transition duration-300 w-fit text-white">
                Biology
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FBF3D5]"></span>
              </li>
              <li className="group transition duration-300 w-fit text-white">
                Chemical
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FBF3D5]"></span>
              </li>
              <li className="group transition duration-300 w-fit text-white">
                Physics
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FBF3D5]"></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col py-2">
            <div className="text-sm text-center text-lg text-white">
              {" "}
              © 2024 Learnivers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
