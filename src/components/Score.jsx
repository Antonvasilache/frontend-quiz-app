import { useQuiz } from "../context/QuizContext";
import LargeButton from "./LargeButton";
import SelectedCategory from "./SelectedCategory";

function Score() {
  const { score, numQuestions, dispatch } = useQuiz();

  function handleReset(e) {
    e.preventDefault();

    dispatch({ type: "reset" });
  }

  return (
    <div className="score">
      <div className="score-card">
        <SelectedCategory />
        <div className="score-text">
          <p className="display">{score}</p>
          <p className="body-m">out of {numQuestions}</p>
        </div>
      </div>
      <LargeButton type="button" handleReset={handleReset}>
        Play Again
      </LargeButton>
    </div>
  );
}

export default Score;
