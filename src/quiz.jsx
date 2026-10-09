import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function Quiz({ category, onFinish, score, setScore }) {
  const [questionId, setQuestionId] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const listQA = {
    scifiQA: [
      {
        id: 1,
        question:
          "In 'Star Wars: Episode V' what does Darth Vader reveal to Luke Skywalker?",
        answers: [
          "I'm your uncle",
          "I'm your father",
          "I'm your clone",
          "Join the dark side",
        ],
        correct: "I'm your father",
      },
      {
        id: 2,
        question:
          "What is the name of the AI system in '2001: A Space Odyssey'?",
        answers: ["ATLAS", "BI-2500", "HAL 9000", "ZEUS"],
        correct: "HAL 9000",
      },
      {
        id: 3,
        question:
          "In 'Back to the Future', what speed does the DeLorean need to reach to travel through time?",
        answers: ["120 kmh", "142 kmh", "160 kmh", "200 kmh"],
        correct: "142 kmh",
      },
      {
        id: 4,
        question:
          "What 1982 sci-fi film features the line 'I’ve seen things you people wouldn’t believe'?",
        answers: ["Total recall", "Robocop", "Terminator", "Blade runner"],
        correct: "Blade runner",
      },
      {
        id: 5,
        question: "In 'The Matrix', what color pill does Neo take?",
        answers: ["Blue", "Green", "Red", "White"],
        correct: "Red",
      },
      {
        id: 6,
        question: "In 'Alien', what is the name of the ship?",
        answers: ["Prometheus", "Nostromo", "Discovery", "Sulaco"],
        correct: "Nostromo",
      },
      {
        id: 7,
        question: "What is the name of the spaceship in 'Interstellar'?",
        answers: ["Ranger", "Lazarus", "Odyssey", "Endurance"],
        correct: "Endurance",
      },
      {
        id: 8,
        question: "In 'Dune', what is the name of the desert planet?",
        answers: ["Caladan", "Giedi Prime", "Arrakis", "Salusa Secundus"],
        correct: "Arrakis",
      },
      {
        id: 9,
        question:
          "What is the name of the main antagonist AI in the 'Terminator' franchise?",
        answers: ["HAL 9000", "Skynet", "ARIA", "NEO 1000"],
        correct: "Skynet",
      },
      {
        id: 10,
        question: "In 'Star Trek', what is Captain Kirk’s middle name?",
        answers: ["James", "Christopher", "Alexander", "Tiberius"],
        correct: "Tiberius",
      },
    ],
    fantasyMythsQA: [
      {
        id: 1,
        question:
          "In 'The Lord of the Rings', what is the name of Frodo’s sword?",
        answers: ["Glamdring", "Narsil", "Andúril", "Sting"],
        correct: "Sting",
      },
      {
        id: 2,
        question:
          "In the Harry Potter series, what is the core of Harry’s wand? ",
        answers: [
          "Phoenix feather",
          "Dragon heartstring",
          "Unicorn hair",
          "Basilisk fang",
        ],
        correct: "Phoenix feather",
      },
      {
        id: 3,
        question: "Who is the Greek god of the sea?",
        answers: ["Zeus", "Poseidon", "Apollo", "Hades"],
        correct: "Poseidon",
      },
      {
        id: 4,
        question: "In 'The Hobbit', what is the name of the dragon?",
        answers: ["Fafnir", "Smaug", "Ancalagon", "Glaurung"],
        correct: "Smaug",
      },
      {
        id: 5,
        question: "In Egyptian mythology, who is the god of the dead?",
        answers: ["Anubis", "Ra", "Osiris", "Set"],
        correct: "Osiris",
      },
      {
        id: 6,
        question:
          "In Celtic mythology, what creature is said to guard buried treasure?",
        answers: ["Leprechaun", "Gnome", "Pixie", "Brownie"],
        correct: "Leprechaun",
      },
      {
        id: 7,
        question:
          "In Norse mythology, what is the name of the rainbow bridge that connects Asgard to Midgard?",
        answers: ["Yggdrasil", "Valhalla", "Asgard", "Bifröst"],
        correct: "Bifröst",
      },
      {
        id: 8,
        question:
          "What creature is said to be born from fire in most mythologies? ",
        answers: ["Dragon", "Griffin", "Salamander", "Phoenix"],
        correct: "Phoenix",
      },
      {
        id: 9,
        question: "In Norse mythology, what is the name of Thor’s mother? ",
        answers: ["Sif", "Frigga/Frigg", "Hel", "Skadi"],
        correct: "Frigga/Frigg",
      },
      {
        id: 10,
        question:
          "Which creature in Greek mythology has the head of a bull and the body of a man? ",
        answers: ["Centaur", "Minotaur", "Cyclops", "Satyr"],
        correct: "Minotaur",
      },
    ],
    gamesQA: [
      {
        id: 1,
        question:
          "What is the name of the protagonist in the Legend of Zelda series?",
        answers: ["Zelda", "Sheik", "Link", "Ganon"],
        correct: "Link",
      },
      {
        id: 2,
        question: "Which company created the game Minecraft?",
        answers: ["Roblox", "Notch studios", "Mohjang", "Valve"],
        correct: "Mohjang",
      },
      {
        id: 3,
        question: "In what year was the first PlayStation console released?",
        answers: ["1996", "1992", "1998", "1994"],
        correct: "1994",
      },
      {
        id: 4,
        question: "Which Nintendo character is known as the 'King of Koopas'?",
        answers: ["Wario", "Kamek", "Bowser", "Donkey Kong"],
        correct: "Bowser",
      },
      {
        id: 5,
        question:
          "What is the name of the main antagonist in the Final Fantasy VII?",
        answers: ["Sephiroth", "Kefka", "Jenova", "Rufus"],
        correct: "Sephiroth",
      },
      {
        id: 6,
        question: "What was the first commercially successful video game?",
        answers: ["Space invaders", "Tetris", "Pong", "Pac-man"],
        correct: "Pong",
      },
      {
        id: 7,
        question:
          "In the game “Portal,” what is the name of the AI antagonist?",
        answers: ["SHODAN", "AM", "GLaDOS", "LAN 2.0"],
        correct: "GLaDOS",
      },
      {
        id: 8,
        question:
          "Which classic arcade game features characters named Inky, Blinky, Pinky, and Clyde?",
        answers: ["Donkey kong", "Galaga", "Space invaders", "Pac-man"],
        correct: "Pac-man",
      },
      {
        id: 9,
        question: "What was the first video game to be played in space?",
        answers: ["Pong", "Tetris", "Space invaders", "Pac-man"],
        correct: "Tetris",
      },
      {
        id: 10,
        question: "What year was the original Super Mario Bros. released?",
        answers: ["1983", "1987", "1985", "1989"],
        correct: "1985",
      },
    ],
  };
  const questions = listQA[category];
  const currentQuestion = questions[questionId];

  function handleNext() {
    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }
    if (questionId === 9) {
      onFinish("results");
    } else {
      setQuestionId(questionId + 1);
    }
    setSelectedAnswer(null);
  }

  return (
    <>
      <section
        id="questionBox"
        className="bg-purple-dark w-full rounded-2xl p-8 max-w-4xl mx-auto mt-16"
      >
        <h3 className="questions text-2xl font-semibold text-mint mb-6">
          {currentQuestion.question}
        </h3>

        <div className="flex flex-col gap-2">
          {currentQuestion.answers.map((textAnswer, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 w-fit ${
                selectedAnswer === currentQuestion.correct
                  ? ""
                  : textAnswer === currentQuestion.correct &&
                      selectedAnswer !== null
                    ? "bg-mint-dark/40 text-dark rounded-xl px-2 py-1"
                    : textAnswer === selectedAnswer
                      ? "bg-mauve/60 text-dark rounded-xl px-2 py-1"
                      : ""
              }`}
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
              <label htmlFor={index} className="text-lg text-mint">
                {textAnswer}
              </label>
              {textAnswer === selectedAnswer &&
                selectedAnswer !== currentQuestion.correct && <XCircle />}
              {textAnswer === currentQuestion.correct &&
                selectedAnswer !== null && <CheckCircle />}
            </div>
          ))}
        </div>

        <button
          className="bg-mint-dark text-dark font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-200 cursor-pointer mt-6 ml-auto block"
          onClick={handleNext}
        >
          Next question
        </button>
      </section>
    </>
  );
}
