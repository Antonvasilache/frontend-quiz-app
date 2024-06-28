import { useQuiz } from "../context/QuizContext";

function Question() {
  const { index, numQuestions, questions } = useQuiz();
  return (
    <div className="question-wrapper">
      <div className="question">
        <p className="body-s">
          Question {index + 1} of {numQuestions}
        </p>
        <p className="heading-m">{questions[index].question}</p>
      </div>
      <div>
        <svg
          width="465"
          height="16"
          viewBox="0 0 465 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="465" height="16" rx="8" fill="white" />
          <rect x="4" y="4" width="300" height="8" rx="4" fill="#A729F5" />
        </svg>
      </div>
    </div>
  );
}

export default Question;