import Main from "./components/Main";
import Title from "./components/Title";
import Score from "./components/Score";
import Header from "./components/Header";
import Answers from "./components/Answers";
import Question from "./components/Question";
import Completed from "./components/Completed";
import Categories from "./components/Categories";
import ToggleButton from "./components/ToggleButton";
import SelectedCategory from "./components/SelectedCategory";

import { useQuiz } from "./context/QuizContext";

function App() {
  const { status } = useQuiz();

  return (
    <>
      <div className="container-wrapper">
        <div className="container">
          <div className="content">
            <Header>
              <SelectedCategory />
              <ToggleButton />
            </Header>
            <Main>
              {status === "ready" && (
                <>
                  <Title />
                  <Categories />
                </>
              )}
              {status === "active" && (
                <>
                  <Question />
                  <Answers />
                </>
              )}
              {status === "completed" && (
                <>
                  <Completed />
                  <Score />
                </>
              )}
            </Main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
