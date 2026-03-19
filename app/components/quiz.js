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
      {/* Minimal style tag only for things that cannot be inlined: keyframes, hover/active/disabled states, and dynamic state classes */}
      <style>{`
        .quiz-option-btn:hover:not(:disabled) {
          background-color: #f8fafc !important;
          border-color: #2F97C1 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(47, 151, 193, 0.2) !important;
        }

        .quiz-option-btn:active:not(:disabled) {
          transform: translateY(0) !important;
        }

        .quiz-option-btn.selected {
          background-color: #eff6ff !important;
          border-color: #094D92 !important;
          box-shadow: 0 0 0 1px #094D92 !important;
        }

        .quiz-option-btn.correct {
          background-color: rgba(16, 185, 129, 0.2) !important;
          border-color: #10b981 !important;
        }

        .quiz-option-btn.incorrect {
          background-color: rgba(239, 68, 68, 0.2) !important;
          border-color: #ef4444 !important;
          animation: quizShake 0.4s ease-in-out;
        }

        .quiz-option-btn:disabled {
          cursor: default !important;
          opacity: 0.8 !important;
        }

        @keyframes quizShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        background: '#FAF9F9',
        color: '#0f172a',
        padding: '2rem',
        fontFamily: 'inherit',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '2.5rem',
          textAlign: 'center',
        }}>
          <span style={{
            color: '#094D92',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Quick Question</span>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.3,
            margin: 0,
            maxWidth: '600px',
          }}>
            How much water does a single <br /> AI prompt use?
          </h2>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '500px',
        }}>
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
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  color: '#0f172a',
                  fontSize: '1.125rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  textAlign: 'left',
                }}
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

