import "./home.css";
import { categories } from "./quizData";

export default function Categories({ onSelect }) {
  return (
    <section className=" flex flex-col items-center justify-around min-h-screen pb-110">
      <div>
        <h1 className="text-mint text-6xl font-bold mb-20">Quizzes</h1>
      </div>

      <div className="stack">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`card flex items-center justify-center text-white text-center whitespace-pre-line font-bold ${cat.cardClass}`}
            onClick={() => onSelect(cat.id)}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </section>
  );
}
