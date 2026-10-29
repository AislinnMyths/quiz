import { categories } from "./quizData";
import CategoryCard from "./categoryCard";

export default function Categories({ onSelect }) {
  return (
    <section className=" flex flex-col items-center justify-around min-h-screen pb-110">
      <div>
        <h1 className="text-mint text-6xl font-bold mb-20">Quizzes</h1>
      </div>

      <div className="stack">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} cat={cat} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
