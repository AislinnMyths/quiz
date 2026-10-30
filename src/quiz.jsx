import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Button from "./button";

export default function Quiz({ questions, onFinish, score, setScore, onHome }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[questionIndex];

  function handleNext() {
    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }
    if (questionIndex === questions.length - 1) {
      onFinish("results");
    } else {
      setQuestionIndex(questionIndex + 1);
    }
    setSelectedAnswer(null);
  }

  function getAnswerStyle(textAnswer) {
    if (selectedAnswer === null || selectedAnswer === currentQuestion.correct)
      return "";
    if (textAnswer === currentQuestion.correct)
      return "bg-mint-dark/40 text-dark rounded-xl px-2 py-1";
    if (textAnswer === selectedAnswer)
      return "bg-mauve/60 text-dark rounded-xl px-2 py-1";
    return "";
  }

  return (
    <>
      <Button onClick={onHome} className="fixed top-6 right-6">
        Quit
      </Button>

      <section
        id="questionBox"
        className="bg-purple-dark w-lg rounded-2xl p-8 max-w-4xl mx-auto mt-16"
      >
        <h3 className="questions text-2xl font-semibold text-mint mb-6">
          <span className="text-mint font-bold text-4xl">
            {questionIndex + 1}.{" "}
          </span>{" "}
          {currentQuestion.question}
        </h3>

        <div className="flex flex-col gap-2">
          {currentQuestion.answers.map((textAnswer, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 w-fit cursor-pointer ${getAnswerStyle(textAnswer)}`}
            >
              <input
                type="radio"
                className="appearance-none w-4 h-4 rounded-full border-2 border-mint checked:bg-mint cursor-pointer"
                id={index}
                name="radioGroup"
                value={textAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                disabled={selectedAnswer !== null}
                checked={selectedAnswer === textAnswer}
              />
              <label
                htmlFor={index}
                className="text-lg text-mint cursor-pointer"
              >
                {textAnswer}
              </label>
              {textAnswer === selectedAnswer &&
                selectedAnswer !== currentQuestion.correct && <XCircle />}
              {textAnswer === currentQuestion.correct &&
                selectedAnswer !== null && <CheckCircle />}
            </div>
          ))}
        </div>

        <Button onClick={handleNext} className="mt-6 ml-auto block">
          Next Question
        </Button>
      </section>
    </>
  );
}
