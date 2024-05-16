import Contact from "../../assets/contact-us.png";
import picture from "../../assets/picture.png";

const contact = () => {
  return (
    <main>
      <div className="grid grid-cols-2">
        <div className="flex justify-center mt-10">
          <img src={Contact} alt="" className="w-4/5" />
        </div>
        <div className="mt-10">
          <div className="border rounded-md w-2/3 h-30 shadow-lg border-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200">
            <div className="flex justify-center mt-5">
              <img src={picture} alt="" className="w-20" />
            </div>
            <div className="grid grid-cols-2">
              <div className="mt-3">
                <h1 className="flex justify-center">ชื่อ:วิชญ์วิสิฐ สรณวิช</h1>
                <h2 className="flex justify-center">รหัส:63090500434</h2>
              </div>
              <div></div>
            </div>
          </div>
          <div className="border rounded-md w-2/3 h-30 shadow-lg border-black mt-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200">
            <div className="flex justify-center mt-5">
              <img src={picture} alt="" className="w-20" />
            </div>
            <h1 className="flex justify-center mt-3">ณภัชนันท์ สื่อเฉย</h1>
            <h2 className="flex justify-center">65090500434</h2>
          </div>
          <div className="border rounded-md w-2/3 h-30 shadow-lg border-black mt-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200">
            <div className="flex justify-center mt-5">
              <img src={picture} alt="" className="w-20" />
            </div>
            <h1 className="flex justify-center mt-3">สันติจิต คำหนัก</h1>
            <h2 className="flex justify-center">65090500457</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default contact;
