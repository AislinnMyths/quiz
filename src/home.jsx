import "./home.css";

export default function Categories({ onSelect, category }) {
  return (
    <>
      <section
        className="topSection flex flex-col items-center justify-around min-h-screen pb-110"
        id="top"
      >
        <div className="hero"></div>
        <div>
          <h1 className="text-mint text-6xl font-bold mb-20">Quizzes</h1>
        </div>

        <div className="stack">
          <div
            className="card c1 flex items-center justify-center text-white font-bold"
            onClick={() => onSelect("scifiQA")}
          >
            Sci-fi Quiz
          </div>
          <div
            className="card c2 flex items-center justify-center text-white font-bold"
            onClick={() => onSelect("fantasyMythsQA")}
          >
            Fantasy & Myths Quiz
          </div>
          <div
            className="card c3 flex items-center justify-center text-white font-bold"
            onClick={() => onSelect("gamesQA")}
          >
            Games Quiz
          </div>
        </div>
      </section>
    </>
  );
}
