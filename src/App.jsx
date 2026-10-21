import Quiz from "./quiz";
import Categories from "./home";
import Results from "./results";
import { useState } from "react";

function App() {
  const [view, setView] = useState("home");
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(0);

  function handleSelect(category) {
    setScore(0);
    setCategory(category);
    setView("quiz");
  }
  function handleHome() {
    setScore(0);
    setCategory(null);
    setView("home");
  }

  return (
    <div className="bg-dark text-mint px-8 min-h-screen flex items-center justify-center">
      {view === "home" && <Categories onSelect={handleSelect} />}
      {view === "quiz" && (
        <Quiz
          category={category}
          onFinish={setView}
          score={score}
          setScore={setScore}
          onHome={handleHome}
        />
      )}
      {view === "results" && (
        <Results
          score={score}
          onSelect={handleSelect}
          category={category}
          onHome={handleHome}
        />
      )}
    </div>
  );
}

export default App;
