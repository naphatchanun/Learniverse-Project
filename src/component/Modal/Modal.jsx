import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex justify-center items-center mt-20">
        <div className="w-[300px] flex flex-col ">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white p-2 rounded">
            <div className="px-10">
              <div className="mt-3">
                <div className="mt-2">
                  <label className="text-sm font-medium font-sans ">
                    First Name
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium font-sans ">
                    Last Name
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium font-sans ">
                    Email
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium font-sans ">
                    Password
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium font-sans ">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  />
                </div>
              </div>
              <div className="mt-5 px-1.5 flex space-x-4 py-1.5">
                <button
                  className="rounded-md bg-[#DDDDDD] px-5 py-2 text-white font-sans"
                  onClick={() => onClose()}
                >
                  Cancle
                </button>
                <button
                  className="rounded-md bg-[#FB6D48] px-7 py-2 text-white font-sans"
                  onClick={() => onClose()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
