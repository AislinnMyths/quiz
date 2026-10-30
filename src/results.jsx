import { categories } from "./quizData";
import CategoryCard from "./categoryCard";
import Button from "./button";

export default function Results({
  score,
  onSelect,
  category,
  onHome,
  questions,
}) {
  const percentage = (score / questions.length) * 100;
  const otherCategories = categories.filter(
    (catFilter) => catFilter.id !== category,
  );

  const getMessage = () => {
    if (percentage === 100) return "Perfect!";
    if (percentage >= 70) return "Well done!";
    if (percentage >= 40) return "Not bad!";
    return "Keep practicing!";
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-around pb-90">
      <p className="text-mint-dark text-3xl font-bold">
        you got {percentage}% correct
      </p>
      <p className="text-mint text-4xl font-semibold">{getMessage()}</p>

      <div className="stack mt-12 mb-12">
        {otherCategories.map((cat) => (
          <CategoryCard key={cat.id} cat={cat} onSelect={onSelect} />
        ))}
      </div>

      <div>
        <Button onClick={onHome} className="mt-6 ml-auto block">
          Back to home
        </Button>
      </div>
    </div>
  );
}
