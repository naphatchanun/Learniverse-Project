import React from "react";

const Member3 = ({ isVisible, onClose }) => {
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
              <div className="px-1.5 flex space-x-4 py-1.5">
                <div className="grid md:grid-cols-[3fr_6fr] grid-cols-1">
                  <div className="flex justify-start font-semibold">
                    Facebook:
                    <br />
                    Instagram:
                    <br />
                    Gmail:
                    <br />
                    Github:
                  </div>
                  <div className="flex justify-start ">
                    Santijit Kamnak
                    <br />
                    onosannnnt
                    <br />
                    Onopingping@gmaill.com
                    <br />
                    https://github.com/Oceannnx
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

export default Member3;
