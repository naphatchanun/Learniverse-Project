import Contact from "../../assets/contact1.png";
import picture from "../../assets/contact1.png";

const contact = () => {
  return (
    <main>
      <div className="grid grid-cols-2">
        <div className="mt-10">
          <div className="flex justify-center ">
            <h1 className=" text-5xl ont-semibold font-serif ">Contact</h1>
          </div>
          <div className="flex items-center justify-center mt-20">
            <img src={Contact} alt="" className="w-72 h-72" />
          </div>
        </div>
        <div className="mt-10">
          <div className="border rounded-md w-1/3 h-30 shadow-lg border-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200">
            <div className="flex justify-center mt-5">
              <img src={picture} alt="" className="w-20" />
            </div>
            <h1 className="flex justify-center">ชื่อ:วิชญ์วิสิฐ สรณวิช</h1>
            <h2 className="flex justify-center">รหัส:63090500434</h2>
          </div>
          <div className="border rounded-md w-1/3 h-30 shadow-lg border-black mt-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200">
            <div className="flex justify-center mt-5">
              <img src={picture} alt="" className="w-20" />
            </div>
            <h1 className="flex justify-center mt-3">ณภัชนันท์ สื่อเฉย</h1>
            <h2 className="flex justify-center">65090500434</h2>
          </div>
          <div className="border rounded-md w-1/3 h-30 shadow-lg border-black mt-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#EEEEEE] duration-200">
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
