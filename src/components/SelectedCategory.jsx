import { useQuiz } from "../context/QuizContext";
import { getImageURL } from "../helpers/image-helper";

function SelectedCategory() {
  const { categories, category } = useQuiz();

  const displayedCategory = categories.filter(
    (displayedCategory) => displayedCategory.title === category
  )[0]?.icon;

  return (
    <div className="selected-category">
      {category && (
        <>
          <img
            src={getImageURL(`.${displayedCategory}`)}
            alt={displayedCategory}
          />
          <span className="heading-s">{category}</span>
        </>
      )}
    </div>
  );
}

export default SelectedCategory;
