import React from "react";
import PlayHistory from "../../component/PlayHistory/PlayHistory";

const AccountHistory = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border rounded-md w-auto px-3 h-auto mt-10 py-5 shadow-md">
        <h1 className="text-2xl font-bold inderline mt-8 text-center">
          Play History
        </h1>
        <div className="grid md:grid-cols-[3fr_3fr_3fr_3fr_3fr_3fr] grid-cols-6 flex space-x-3 mt-5">
          <h1 className="text-[#FB6D48] text-lg font-bold text-center">Exam</h1>
          <h1 className="text-[#FB6D48] text-lg font-bold text-center">
            Subject
          </h1>
          <h1 className="text-[#FB6D48] text-lg font-bold text-center">
            Level
          </h1>
          <h1 className="text-[#FB6D48] text-lg font-bold text-center">
            Score
          </h1>
          <h1 className="text-[#FB6D48] text-lg font-bold text-center">Date</h1>
          <h1 className="text-[#FB6D48] text-lg font-bold text-center">Time</h1>
        </div>
        <div>
          <PlayHistory />
        </div>
      </div>
    </div>
  );
};

export default AccountHistory;
