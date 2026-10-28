import "./home.css";
import { categories } from "./quizData";

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
          <div
            key={cat.id}
            className={`card flex items-center justify-center text-white text-center whitespace-pre-line font-bold ${cat.cardClass}`}
            onClick={() => onSelect(cat.id)}
          >
            {cat.name}
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={onHome}
          className="bg-mint-dark text-dark font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-200 cursor-pointer mt-6 ml-auto block"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
