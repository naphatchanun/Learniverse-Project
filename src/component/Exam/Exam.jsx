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
      <h1>{question}</h1>
      <div>
        {choice.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name={currentItem}
                value={index + 1}
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
      <div>
        <button onClick={handleBack}>Back</button>
        {currentItem === examLength - 1 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleNext}>Next</button>
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
