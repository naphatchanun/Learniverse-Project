import { Link } from "react-router-dom";
import Pichome from "../../assets/Ani.gif";
import About1 from "../../assets/about1.png";
import About2 from "../../assets/about2.png";
import About3 from "../../assets/about3.png";
import { useContext } from "react";
import { AuthContext } from "../../context/user";
// import Pichome from "../../assets/Ani2.png";

const firsthome = () => {
  const auth = useContext(AuthContext);
  return (
    <main>
      <body>
        <div className="grid grid-cols-2">
          <div className="px-10 py-15">
            <h1 className="px-10 text-5xl mt-10 font-semibold font-serif">
              Motivation is what sets you in motion, habit is what keeps you
              going.
            </h1>
            <h2 className="px-10 mt-5 text-lg font-serif">
              learniverse is a place where you can develop your academic
              knowledge and practice questions. However, don&apos;t forget to
              become a member with us.
            </h2>
            <div className="px-10">
              {auth.email ? (
                <div></div>
              ) : (
                <div>
                  <Link to="/SignUp">
                    <button className="mt-5 rounded-md bg-[#FB6D48] text-white w-[100px] h-[40px] font-serif">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center ">
            <img src={Pichome} alt="" className="w-3/5" />
          </div>
        </div>
      </body>
      <div>
        <div className="flex justify-center text-3xl mt-10 font-semibold font-serif">
          About
        </div>
        <div className="flex justify-center font-serif mt-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est
          obcaecati accusantium consequuntur temporibus <br />
          illum sit tempora laborum eligendi optio praesentium eveniet, natus
          distinctio a, aspernatur maxime. Blanditiis, excepturi iusto!
        </div>
        <div className="grid grid-cols-3 px-5 mt-5 ">
          <div className="flex justify-end">
            <div className="border-4 rounded-md px-10 w-2/3 py-3">
              <div className="flex justify-center">
                <img src={About2} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-4 rounded-md px-10 w-2/3 py-3">
              <div className="flex justify-center">
                <img src={About1} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                วัดเเละประเมินการเรียนรู้ของตัวเอง
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border-4 rounded-md px-10 w-2/3 py-3">
              <div className="flex justify-center">
                <img src={About3} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                ส่งเสริมการเรียนรู้ด้วยการทำซ้ำ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center text-3xl mt-20 font-semibold font-serif">
          Contact
        </div>
        <div className="grid grid-cols-3 px-5 mt-5 ">
          <div className="flex justify-end">
            <div className="border-4 rounded-md px-10 w-2/3 py-3">
              <div className="flex justify-center">
                <img src={About2} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-4 rounded-md px-10 w-2/3 py-3">
              <div className="flex justify-center">
                <img src={About1} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                วัดเเละประเมินการเรียนรู้ของตัวเอง
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border-4 rounded-md px-10 w-2/3 py-3">
              <div className="flex justify-center">
                <img src={About3} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                ส่งเสริมการเรียนรู้ด้วยการทำซ้ำ
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default firsthome;
