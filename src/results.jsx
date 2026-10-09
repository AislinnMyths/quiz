import "./home.css";

export default function Results({ score, onSelect, category }) {
  const percentage = (score / 10) * 100;
  const allCategories = ["scifiQA", "fantasyMythsQA", "gamesQA"];
  const otherCathegories = allCategories.filter(
    (catFilter) => catFilter !== category,
  );

  const cardStyles = {
    scifiQA: "c1",
    fantasyMythsQA: "c2",
    gamesQA: "c3",
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-24">
      <p className="text-mint text-3xl font-bold">
        you got {percentage}% correct{" "}
      </p>

      <div className="stack mt-60">
        {otherCathegories.map((cat) => (
          <div
            key={cat}
            className={`card ${cardStyles[cat]}`}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}
