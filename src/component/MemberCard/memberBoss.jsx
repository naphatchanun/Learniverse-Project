import React from "react";
import "boxicons";

const Member1 = ({ isVisible, onClose }) => {
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
        <div className="w-[400px] flex flex-col ">
          <div className="bg-white p-2 rounded">
            <div className="px-10">
              <div className="mt-3 flex justify-end">
                <button
                  className="text-gray-500 text-md place-self-start"
                  onClick={() => onClose()}
                >
                  X
                </button>
              </div>
              <div className="mt-2 px-1.5 flex space-x-4 py-1.5">
                <div className="grid md:grid-cols-[1fr_3fr_6fr] grid-cols-1">
                  <div>
                    <box-icon
                      type="logo"
                      name="facebook-square"
                      color="blue"
                    ></box-icon>
                    <box-icon type="logo" name="instagram"></box-icon>
                    <box-icon name="gmail" type="logo" color="red"></box-icon>
                    <box-icon name="github" type="logo"></box-icon>
                  </div>
                  <div className="flex justify-start font-semibold px-2">
                    <div>
                      <h1>Facbook:</h1>
                      <h1 className="mt-1">Instagram:</h1>
                      <h1 className="mt-2">Gmail:</h1>
                      <h1 className="mt-1.5">Github:</h1>
                    </div>
                  </div>
                  <div className="flex justify-start ">
                    <div>
                      <h1>Witwisit Sorranawit</h1>
                      <h1 className="mt-1">bosswts</h1>
                      <h1 className="mt-2">Witwisitboss@gmail.com</h1>
                      <h1 className="mt-1.5">https://github.com/witwisit</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member1;
