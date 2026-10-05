export default function Categories({ onSelect, category }) {
  return (
    <>
      <section className="topSection" id="top">
        <div className="hero"></div>
        <div>
          <h1>Quizzes</h1>
        </div>

        <div className="stack">
          <div className="card c1" onClick={() => onSelect("scifiQA")}>
            Sci-fi Quiz
          </div>
          <div className="card c2" onClick={() => onSelect("fantasyMythsQA")}>
            Fantasy & Myths Quiz
          </div>
          <div className="card c3" onClick={() => onSelect("gamesQA")}>
            Games Quiz
          </div>
        </div>
      </section>
    </>
  );
}
