import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../component/Footer/footer";
import About2 from "../../assets/about2.png";

const ExamResult = () => {
  const { state } = useLocation();
  const Navigate = useNavigate();
  console.log(state);

  useEffect(() => {
    if (!state) {
      Navigate("/");
    }
  }, []);
  return (
    <main>
      <div className="flex justify-center">
        <div className="rounded-md h-36 mt-20 w-56 bg-[#FBF3D5]">
          <h1 className="text-center mt-5 text-lg font-bold ">Exam Result</h1>
          <h2 className="text-center mt-5">
            Score: {state.payload?.score} / {state.payload.correctAnswer.length}
          </h2>
        </div>
      </div>
      <div>
        <div className="flex justify-center text-3xl mt-10 font-semibold font-serif">
          Read more
        </div>
        <div className="flex justify-center font-serif mt-5 text-center text-lg">
          รู้หรือไม่? บิดาของเเต่ละวิชาคือใครกัน!
        </div>
        <div className="grid md:grid-cols-[4fr_4fr_4fr_4fr] grid-cols-4 mt-5">
          <div className="flex justify-center ">
            <div className="border-4 rounded-md px-10 w-5/6 py-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
              <div className="flex justify-center">
                <img src={About2} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                <div>
                  <h1 className="font-bold">
                    Pythagoras <br />
                    (พีทาโกรัส)
                  </h1>
                  <h2 className="text-[#FB6D48]">"บิดาของวิชาคณิตศาสตร์"</h2>
                  <h3>เนื่องจากการค้นพบของเขาเกี่ยวกับทฤษฎีพีทาโกรัส</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="border-4 rounded-md px-10 w-5/6 py-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <div className="flex justify-center">
                <img src={About2} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                <div>
                  <h1 className="font-bold">
                    Aristotle <br />
                    (อริสโตเติล)
                  </h1>
                  <h2 className="text-[#FB6D48]">"บิดาของชีววิทยา"</h2>
                  <h3>
                    เนื่องจากผลงานของเขาในเรื่องการจัดจำแนกสิ่งมีชีวิตและการศึกษาเกี่ยวกับธรรมชาติ
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="border-4 rounded-md px-10 w-5/6 py-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <div className="flex justify-center">
                <img src={About2} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                <div>
                  <h1 className="font-bold">
                    Antoine Lavoisier <br />
                    (อ็องตวน ลาวัวซิเอร์)
                  </h1>
                  <h2 className="text-[#FB6D48]">"บิดาของเคมีสมัยใหม่"</h2>
                  <h3>
                    เนื่องจากการค้นพบและการสร้างกฎของเคมี เช่น
                    กฎของการคงสภาพของมวล
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="border-4 rounded-md px-10 w-5/6 py-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <div className="flex justify-center">
                <img src={About2} alt="" className="w-2/5" />
              </div>
              <div className="flex justify-center text-center mt-3">
                <div>
                  <h1 className="font-bold">
                    Isaac Newton <br />
                    (ไอแซก นิวตัน)
                  </h1>
                  <h2 className="text-[#FB6D48]">"บิดาของฟิสิกส์คลาสสิก"</h2>
                  <h3>เนื่องจากการค้นพบกฎการเคลื่อนที่และกฎแรงโน้มถ่วง</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ExamResult;
