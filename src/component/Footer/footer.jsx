import { Link } from "react-router-dom";
import Logo from "../../assets/Home-Logo.png";

export const Footer = () => {
  return (
    <footer className="hidden md:grid mt-10">
      <div className="bg-[#FB6D48]">
        <div className="grid grid-cols-[6fr_2fr_2fr_1fr]">
          <div className="flex items-center px-10">
            <img
              src={Logo}
              alt="Logo"
              className="ml-16 w-28 object-cover my-3"
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
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </h1>
              </Link>
              <Link to="/Creact">
                <li className="group transition duration-300 w-fit">
                  Creact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </li>
              </Link>
              <Link to="/Creact">
                <li className="group transition duration-300 w-fit">
                  Play
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex my-4 justify-center items-center">
            <ul>
              <h1 className="font-bold text-lg">Subject</h1>
              <li className="group transition duration-300 w-fit">
                คณิตศาสตร์
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </li>
              <li className="group transition duration-300 w-fit">
                ชีวะวิทยา
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </li>
              <li className="group transition duration-300 w-fit">
                เคมี
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </li>
              <li className="group transition duration-300 w-fit">
                ฟิสิกส์
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="text-sm text-center">
              {" "}
              Oh-myPet v1.0 copyright © 2023
            </div>
            <div className="text-sm text-center">
              {" "}
              This Project is for Study porpuse
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};
