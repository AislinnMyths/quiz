export default function Results({ score, onSelect, category }) {
  const percentage = (score / 10) * 100;
  const allCategories = ["scifiQA", "fantasyMythsQA", "gamesQA"];
  const otherCathegories = allCategories.filter(
    (catFilter) => catFilter !== category,
  );

  return (
    <div>
      <p>you got {percentage}% correct </p>
      {otherCathegories.map((cat) => (
        <div key={cat} className="card" onClick={() => onSelect(cat)}>
          {cat}
        </div>
      ))}
    </div>
  );
}
