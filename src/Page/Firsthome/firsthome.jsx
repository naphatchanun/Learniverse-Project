import { Link } from "react-router-dom";
import Pichome from "../../assets/pic-home.png";

const firsthome = () => {
  return (
    <main>
      <div className="grid grid-cols-2">
        <div className="px-5">
          <h1 className="px-10 text-5xl mt-10 font-semibold font-serif">
            Motivation is what sets you in motion, habit is what keeps you
            going.
          </h1>
          <h2 className="px-10 mt-5 text-lg font-serif">
            learniverse is a place where you can develop your academic knowledge
            and practice questions. However, don&apos;t forget to become a
            member with us.
          </h2>
          <div className="px-10">
            <Link to="/SignUp">
              <button className="mt-5 rounded-md bg-[#FB6D48] text-white w-[100px] h-[40px] font-serif">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <img src={Pichome} alt="" className="w-3/4" />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 px-5 mt-5 ">
          <div className="flex justify-end">
            <div className="border rounded-md px-10 w-2/3 py-3">
              เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border rounded-md px-10 w-2/3 py-3">
              เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border rounded-md px-10 w-2/3 py-3 bg-[#EEEEEE]">
              เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="grid grid-cols-3 px-5 mt-5 ">
          <div className="flex justify-end">
            <div className="border rounded-md px-10 w-2/3 py-3">
              เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border rounded-md px-10 w-2/3 py-3">
              เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border rounded-md px-10 w-2/3 py-3 bg-[#EEEEEE]">
              เสริมสร้างความรู้เเละทบทวนเนื้อหาทางการศึกษาผ่านเกม
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default firsthome;
