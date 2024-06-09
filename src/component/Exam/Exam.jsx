import PropTypes from "prop-types";

const Exam = (props) => {
  const {
    current,
    currentItem,
    currentAnswer,
    handleNext,
    handleBack,
    examLength,
    handleChange,
    handleSubmit,
  } = props;
  const { choice, question } = props.item;

  return (
    <main
      className={`flex flex-col ${
        current === currentItem ? "block" : "hidden"
      }`}
    >
      <h1 className="text-lg  mt-10 px-10">{question}</h1>
      <div className="mt-8 px-10">
        <div className="">
          {choice.map((item, index) => {
            return (
              <div
                key={index}
                className="mt-3 border bg-[#FB6D48] bg-opacity-75 h-10 px-5 py-2 cursor-pointer"
                htmlFor={currentItem}
              >
                <input
                  type="radio"
                  name={currentItem}
                  value={index + 1}
                  className=""
                  onChange={handleChange}
                  {...(currentAnswer[index + 1] === index + 1
                    ? { checked: true }
                    : {})}
                />
                {Object.values(item)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <button
          onClick={handleBack}
          className="bg-gray-200 rounded-full px-4 py-1"
        >
          Back
        </button>
        {currentItem === examLength - 1 ? (
          <button
            onClick={handleSubmit}
            className="bg-[#FB6D48] rounded-full px-4 py-1 text-white"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-[#FB6D48] rounded-full px-4 py-1 text-white"
          >
            Next
          </button>
        )}
      </div>
    </main>
  );
};

Exam.propTypes = {
  item: PropTypes.object,
  examLength: PropTypes.number,
  current: PropTypes.number,
  currentItem: PropTypes.number,
  currentAnswer: PropTypes.object,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  handleSubmit: PropTypes.func,
  choice: PropTypes.array,
  handleChange: PropTypes.func,
  question: PropTypes.string,
};

export default Exam;
