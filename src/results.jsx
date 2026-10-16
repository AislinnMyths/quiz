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

  const categoryNames = {
    scifiQA: "Sci-fi Quiz",
    fantasyMythsQA: "Fantasy & myths Quiz",
    gamesQA: "Games Quiz",
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-around pb-90">
      <p className="text-mint text-3xl font-bold">
        you got {percentage}% correct{" "}
      </p>

      <div className="stack mb-12">
        {otherCathegories.map((cat) => (
          <div
            key={cat}
            className={`card flex items-center justify-center text-white text-center whitespace-pre-line font-bold ${cardStyles[cat]}`}
            onClick={() => onSelect(cat)}
          >
            {categoryNames[cat]}
          </div>
        ))}
      </div>
    </div>
  );
}
