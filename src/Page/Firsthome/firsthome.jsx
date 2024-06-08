import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Pichome from "../../assets/Ani.gif";
import About1 from "../../assets/about1.png";
import About2 from "../../assets/about2.png";
import About3 from "../../assets/about3.png";
import Boss from "../../assets/Boss.jpg";
import Member1 from "../../component/MemberCard/memberBoss";
import Member2 from "../../component/MemberCard/memberHong";
import Member3 from "../../component/MemberCard/memberNo";
import Hong from "../../assets/Hong.jpg";
import Ono from "../../assets/Ono.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/user";
// import Pichome from "../../assets/Ani2.png";

export default function First() {
  const auth = useContext(AuthContext);
  const [showMember1, setShowMember1] = useState(false);
  const [showMember2, setShowMember2] = useState(false);
  const [showMember3, setShowMember3] = useState(false);
  return (
    <>
      <body>
        <div className="grid md:grid-cols-[6fr_4fr] grid-cols-1 space-x-10 px-20">
          <div className=" py-15">
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
          <div className="flex justify-start">
            <img src={Pichome} alt="" className="w-4/5" />
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
        <div className="grid md:grid-cols-[4fr_4fr_4fr] grid-cols-3 mt-5">
          <div className="flex justify-end ">
            <div className="border-4 rounded-md px-10 w-2/3 py-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
              <div className="flex justify-center">
                <img src={About2} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="border-4 rounded-md px-10 w-2/3 py-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <div className="flex justify-center ">
                <img src={About1} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                วัดเเละประเมินการเรียนรู้ของตัวเอง
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border-4 rounded-md px-10 w-2/3 py-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
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
        <div className="grid md:grid-cols-[4fr_4fr_4fr] grid-cols-3 mt-5 ">
          <div className="flex justify-end">
            <div className="border-4 rounded-md px-10 w-2/3 py-3 shadow-lg ">
              <div className="flex justify-center mt-5">
                <img src={Boss} alt="" className="w-3/4 rounded-md" />
              </div>
              <div className="flex justify-center text-center mt-3 text-md">
                Witwisit Sorranawit
                <br />
                รหัสนักศึกษา:63090500434
              </div>
              <h3
                className="text-center mt-3 text-[#FB6D48] underline underline-offset-4 cursor-pointer font-semibold"
                onClick={() => setShowMember1(true)}
              >
                ดูเพิ่มเติม
              </h3>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-4 rounded-md px-10 w-2/3 py-3 shadow-lg ">
              <div className="flex justify-center mt-5">
                <img src={Hong} alt="" className="w-3/4 rounded-md" />
              </div>
              <div className="flex justify-center text-center mt-3 text-md">
                Naphatchanun Suechey
                <br />
                รหัสนักศึกษา:65090500434
              </div>
              <h3
                className="text-center mt-3 text-[#FB6D48] underline underline-offset-4  cursor-pointer font-semibold"
                onClick={() => setShowMember2(true)}
              >
                ดูเพิ่มเติม
              </h3>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border-4 rounded-md px-10 w-2/3 py-3 shadow-lg ">
              <div className="flex justify-center mt-5">
                <img src={Ono} alt="" className="w-3/4 rounded-md" />
              </div>
              <div className="flex justify-center text-center mt-3 text-md">
                Santijit Kamnak
                <br />
                รหัสนักศึกษา:65090500457
              </div>
              <h3
                className="text-center mt-3 text-[#FB6D48] underline underline-offset-4 cursor-pointer font-semibold"
                onClick={() => setShowMember3(true)}
              >
                ดูเพิ่มเติม
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Member1 isVisible={showMember1} onClose={() => setShowMember1(false)} />
      <Member2 isVisible={showMember2} onClose={() => setShowMember2(false)} />
      <Member3 isVisible={showMember3} onClose={() => setShowMember3(false)} />
    </>
  );
}
