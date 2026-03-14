import { useState } from "react";
import styles from "./quiz.module.css";

export default function QuizSection({ onDone }) {
  const [guessed, setGuessed] = useState(null);

  const options = [
    { label: "A cup of coffee", value: "cup", emoji: "☕" },
    { label: "A bottle of water", value: "bottle", emoji: "💧", correct: true },
    { label: "An entire shower", value: "shower", emoji: "🚿" },
    { label: "I have no idea", value: "no_idea", emoji: "🤷‍♂️" },
  ];

  function handleGuess(value) {
    if (guessed) return; // Prevent multiple guesses
    
    setGuessed(value);
    
    // Automatically transition after showing the result
    setTimeout(() => {
      onDone();
    }, 1500);
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <span className={styles.eyebrow}>Quick Question</span>
        <h2 className={styles.title}>
          How much water does a single <br /> AI prompt use?
        </h2>
      </div>
      
      <div className={styles.optionsContainer}>
        {options.map((opt) => {
          let btnStateClass = "";
          
          if (guessed) {
            if (opt.correct) {
              btnStateClass = styles.correct; // Highlight correct answer
            } else if (guessed === opt.value) {
              btnStateClass = styles.incorrect; // Highlight guessed incorrect answer
            }
          }

          return (
            <button
              key={opt.value}
              className={`${styles.optionBtn} ${btnStateClass}`}
              onClick={() => handleGuess(opt.value)}
              disabled={guessed !== null}
            >
              <span>{opt.label}</span>
              <span>{opt.emoji}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
