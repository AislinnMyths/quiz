import Quiz from "./quiz";
import Categories from "./home";
import Results from "./results";
import { useState } from "react";

function App() {
  const [view, setView] = useState("home");
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(0);

  function handleSelect(category) {
    setCategory(category);
    setView("quiz");
  }

  return (
    <div>
      {view === "home" && <Categories onSelect={handleSelect} />}
      {view === "quiz" && (
        <Quiz
          category={category}
          onFinish={setView}
          score={score}
          setScore={setScore}
        />
      )}
      {view === "results" && (
        <Results score={score} onSelect={handleSelect} category={category} />
      )}
    </div>
  );
}

export default App;
