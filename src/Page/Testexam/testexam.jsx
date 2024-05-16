import React from "react";

function testexam() {
  return (
    <div className="flex justify-center mt-20">
      <div className="border-4 rounded-md border-[#FB6D48] w-auto h-auto">
        <h1 className="flex justify-center font-semibold text-xl mt-3 font-serif">
          Question 1
        </h1>
        <h2 className="mt-7 px-10 text-lg ">
          จีโนไทป์ ที่มียีนส์ 2 เเอลลีน ที่ต่างกันเข้าคู่กัน
          จีโนไทป์สภาพนี้คือข้อใด
        </h2>
        <div className="px-10 mt-5 py-3">
          <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 text-sm hover:border-[#FB6D48] border-2">
            1.เฮเทอโรไซกัสจีโนไทป์ (heterozygeus genotype)
          </div>
          <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
            2 .ฮอโมไซกัสโดมิแนนท์ (homezygous dominant )
          </div>
          <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
            3. ฮอมอไซกัสจีโนไทป์ (homozygous genotype)
          </div>
          <div className="border rounded-md bg-[#FBF3D5] w-auto h-8 px-3 mt-3 text-sm hover:border-[#FB6D48] border-2">
            4. ฮอโมไซกัส รีเซสสีพ (homozygous recessive )
          </div>
        </div>
        <div className="grid grid-cols-2 py-3">
          <div className="flex justify-end">
            <button className="rounded-full bg-[#DDDDDD] px-5 py-2 text-white ">
              Back
            </button>
          </div>
          <div className="flex justify-start px-2">
            <button className="rounded-full bg-[#FB6D48] px-5 py-2 text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testexam;
