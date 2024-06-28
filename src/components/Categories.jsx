import { useQuiz } from "../context/QuizContext";
import { getImageURL } from "../helpers/image-helper";

function Categories() {
  const { dispatch, categories } = useQuiz();

  return (
    <form className="categories">
      {categories.map((category) => (
        <button
          className="category heading-s"
          key={category.title}
          onClick={() => dispatch({ type: "start", payload: category.title })}
        >
          <img src={getImageURL(`.${category.icon}`)} alt={category.title} />
          <span>{category.title}</span>
        </button>
      ))}
    </form>
  );
}

export default Categories;
