import { useState } from "react";

export default function QuizSection({ onDone }) {
  const [guessed, setGuessed] = useState(null);

  const options = [
    { label: "A cup of coffee", value: "cup" },
    { label: "A bottle of water", value: "bottle" },
    { label: "An entire shower", value: "shower" },
    { label: "I have no idea", value: "no_idea" },
  ];

  function handleGuess(value) {
    if (guessed) return;
    setGuessed(value);
    setTimeout(() => onDone(), 1500);
  }

  return (
    <div>
      <h2>How much water does one AI prompt use?</h2>
      {options.map((opt) => (
        <button key={opt.value} onClick={() => handleGuess(opt.value)}>
          {opt.label}
          {guessed && opt.value === "bottle" && " ✓"}
        </button>
      ))}
      {guessed && <p>One prompt uses about 500ml of water.</p>}
    </div>
  );
}
