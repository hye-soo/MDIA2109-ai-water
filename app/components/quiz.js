"use client";
import { useState } from "react";

export default function QuizSection({ onDone }) {
  const [guessed, setGuessed] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const options = [
    { label: "A cup of coffee", value: "cup", emoji: "☕" },
    { label: "A bottle of water", value: "bottle", emoji: "💧", correct: true },
    { label: "An entire shower", value: "shower", emoji: "🚿" },
    { label: "I have no idea", value: "no_idea", emoji: "🤷‍♂️" },
  ];

  function handleGuess(value) {
    if (guessed) return;
    setGuessed(value);
    setTimeout(() => {
      onDone();
    }, 1500);
  }

  return (
    <>
      <style>{`
        .quiz-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          background: #FAF9F9;
          color: #0f172a;
          padding: 2rem;
          font-family: inherit;
        }

        .quiz-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .quiz-eyebrow {
          color: #094D92;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .quiz-title {
          font-size: 2.5rem;
          font-weight: 400;
          line-height: 1.3;
          margin: 0;
          max-width: 600px;
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 500px;
        }

        .quiz-option-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1.25rem 1.5rem;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          color: #0f172a;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          text-align: left;
        }

        .quiz-option-btn:hover:not(:disabled) {
          background-color: #f8fafc;
          border-color: #2F97C1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(47, 151, 193, 0.2);
        }

        .quiz-option-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .quiz-option-btn.selected {
          background-color: #eff6ff;
          border-color: #094D92;
          box-shadow: 0 0 0 1px #094D92;
        }

        .quiz-option-btn.correct {
          background-color: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }

        .quiz-option-btn.incorrect {
          background-color: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          animation: quizShake 0.4s ease-in-out;
        }

        .quiz-option-btn:disabled {
          cursor: default;
          opacity: 0.8;
        }

        @keyframes quizShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>

      <div className="quiz-container">
        <div className="quiz-header">
          <span className="quiz-eyebrow">Quick Question</span>
          <h2 className="quiz-title">
            How much water does a single <br /> AI prompt use?
          </h2>
        </div>
        
        <div className="quiz-options">
          {options.map((opt) => {
            let btnStateClass = "";
            
            if (guessed) {
              if (opt.correct) {
                btnStateClass = "correct";
              } else if (guessed === opt.value) {
                btnStateClass = "incorrect";
              }
            }

            return (
              <button
                key={opt.value}
                className={`quiz-option-btn ${btnStateClass}`}
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
    </>
  );
}
