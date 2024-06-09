// import Modal from "../../component/Modal/Modal";
// import "boxicons";
// import EditExam from "../../component/Editexam/editexam";
import AccountHistory from "../../component/AccountHistory/accounthistory";
import { useState } from "react";
import { Footer } from "../../component/Footer/footer";
import ExamStorage from "../../component/ExamStorage/ExamStorage";
import Profile from "../../component/Profile/Profile";

export default function Home() {
  const [display, setDisplay] = useState("Profile");
  // const [showEditExam, setShowEditExam] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="border-1 bg-[#FBF3D5] w-full h-14">
          <div className="flex justify-center">
            <div className="flex items-center">
              <div className="px-10 py-2">
                <ui
                  className="block py-2 px-3 hover:text-[#FB6D48] cursor-pointer"
                  onClick={() => setDisplay("Profile")}
                >
                  Profile
                </ui>
              </div>
            </div>
            <div className="px-10 py-2">
              <ui
                className="block py-2 px-3 hover:text-[#FB6D48] cursor-pointer"
                onClick={() => setDisplay("history")}
              >
                History
              </ui>
            </div>
            <div className="px-10 py-2">
              <ui
                className="block py-2 px-3 hover:text-[#FB6D48] cursor-pointer"
                onClick={() => setDisplay("myExam")}
              >
                Exam Storage
              </ui>
            </div>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-[3fr_6fr] grid-cols-1 flex space-x-10">
          <div className="md:grid md:grid-cols-1 w-full  grid-cols-1">
            <div className="border rounded-md bg-[#F3F3F3] h-auto h-screen">
              <h1 className="text-xl font-bold inderline mt-8">Profile</h1>
              <div className="mt-80">
                <botton
                  className="rounded-md bg-[#FB6D48] px-10 py-2 text-white font-sans"
                  // onClick={() => setShowModal(true)}
                >
                  Edit
                </botton>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="border rounded-md w-[750px] px-3 h-auto">
              <h1 className="text-xl font-bold inderline mt-8">Exam Storage</h1>
              <div className="mt-80">
                <botton
                  className="rounded-md bg-[#FB6D48] px-10 py-2 text-white font-sans"
                  // onClick={() => setShowEditExam(true)}
                >
                  Edit
                </botton>
              </div>
            </div>
            <div className="border rounded-md w-[750px] px-3 h-auto mt-10">
              <h1 className="text-2xl font-bold inderline mt-8">
                Play History
              </h1>
              <div className="grid md:grid-cols-[3fr_3fr_3fr] grid-cols-3 flex space-x-3 mt-5">
                <h1 className="text-[#FB6D48] text-lg font-bold">Exam</h1>
                <h1 className="text-[#FB6D48] text-lg font-bold">Subject</h1>
                <h1 className="text-[#FB6D48] text-lg font-bold">Level</h1>
              </div>
              <div>
                <PlayHistory />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {display === "Profile" && <Profile />}
      {display === "history" && <AccountHistory />}
      {display === "myExam" && <ExamStorage />}
      {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)} /> */}
      {/* <EditExam
        isVisible={showEditExam}
        onClose={() => setShowEditExam(false)}
      /> */}
      <Footer />
    </>
  );
}
