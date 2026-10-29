import "./home.css";

export default function CategoryCard({ cat, onSelect }) {
  return (
    <div
      className={`card flex items-center justify-center text-white, text-center whitespace-pre-line font-bold ${cat.cardClass}`}
      onClick={() => onSelect(cat.id)}
    >
      {cat.name}
    </div>
  );
}
