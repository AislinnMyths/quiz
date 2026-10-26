import Quiz from "./quiz";
import Categories from "./home";
import Results from "./results";
import { useState } from "react";
import { categories } from "./quizData";

function App() {
  const [view, setView] = useState("home");
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(0);
  const currentCategory = categories.find((catFind) => catFind.id === category);
  const questions = currentCategory?.questions;

  function handleSelect(selectedCategory) {
    setScore(0);
    setCategory(selectedCategory);
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
          questions={questions}
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
          questions={questions}
        />
      )}
    </div>
  );
}

export default App;
