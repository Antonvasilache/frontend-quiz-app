import { useQuiz } from "../context/QuizContext";
import { useTheme } from "../context/ThemeContext";
import { getImageURL } from "../helpers/image-helper";

function Categories() {
  const { dispatch, categories } = useQuiz();
  const { isDarkMode } = useTheme();

  return (
    <form className="categories">
      {categories.map((category) => (
        <button
          className={`category heading-s ${
            isDarkMode ? "category-dark-theme" : ""
          }`}
          key={category.title}
          onClick={() => dispatch({ type: "start", payload: category.title })}
        >
          <img
            src={getImageURL(`.${category.icon}`)}
            alt={category.title}
            className={`category-img ${category.title.toLowerCase()}`}
          />
          <span>{category.title}</span>
        </button>
      ))}
    </form>
  );
}

export default Categories;
