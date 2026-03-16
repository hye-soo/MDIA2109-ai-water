"use client";

import { useState, useEffect } from "react";

//onPromptSent = callback to notify parent a prompt was sent
//onReset = callback to notify parent of a reset
//promptCount = number of prompts sent

export default function WaterSimulator({ onPromptSent, onReset, promptCount }) {
  const [promptText, setPromptText] = useState("");
  const [waterLevel, setWaterLevel] = useState(0);

  // --- DROP ANIMATION (from falling.md) ---
  const [dropTop, setDropTop] = useState(-40);
  const [dropping, setDropping] = useState(false);
  // drop falls down into the cup (from falling.md pattern)
  useEffect(() => {
    if (!dropping) return;
    if (dropTop >= 140) {
      setDropping(false);
      setDropTop(-40);
    } else {
      requestAnimationFrame(() => setDropTop(dropTop + 6));
    }
  }, [dropping, dropTop]);

  const EXAMPLE_PROMPTS = [
    "Write me a poem about the ocean...",
    "Explain quantum computing simply...",
    "Plan a weekend trip to Tokyo...",
    "Help me debug my React code...",
    "What's the best way to learn guitar?",
    "Write a cover letter for a design job...",
    "Summarize the history of the internet...",
    "Give me a recipe for banana bread...",
    "How does a black hole work?",
    "Write a bedtime story about a dragon...",
  ];

  const currentPlaceholder =
    EXAMPLE_PROMPTS[promptCount % EXAMPLE_PROMPTS.length];

  function handleSend() {
    if (!promptText.trim()) return; //ignore empty input
    onPromptSent(); //tell parent: +1 prompt
    setWaterLevel(Math.min(waterLevel + 18, 100)); //fill water
    setPromptText(""); //clear input
    setDropping(true); //start drop animation
    setDropTop(-40); //reset drop position
  }
  function handleReset() {
    setWaterLevel(0); //empty glass
    setPromptText(""); //clear input
    setDropping(false); //stop drop animation
    setDropTop(-40); //reset drop position
    onReset(); // tells explore.js to set promptCount back to 0
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <style>{`@keyframes wave {
          0%   { transform: translateX(0) translateY(0); }
          25%  { transform: translateX(-5%) translateY(3px); }
          50%  { transform: translateX(-10%) translateY(0); }
          75%  { transform: translateX(-5%) translateY(1px); }
          100% { transform: translateX(0) translateY(0); }
        }
        @keyframes shimmer {
          0%   { opacity: 0.6; }
          50%  { opacity: 1; }
          100% { opacity: 0.6; }
        }
        @keyframes spark {
          0%   { opacity: 0; transform: translateY(0) scale(0); }
          50%  { opacity: 1; transform: translateY(-8px) scale(1); }
          100% { opacity: 0; transform: translateY(-16px) scale(0); }
        }
          
        .water-fill {
          animation: wave 3s ease-in-out infinite;
        } .water-fill::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 8px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          animation: shimmer 2s ease-in-out infinite;
        }
        .water-fill::after {
          content: '';
          position: absolute;
          top: 4px; left: 0%;
          width: 100%; height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          animation: shimmer 2s ease-in-out infinite reverse;
        }
          .spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    animation: spark 1.5s ease-in-out infinite;
    pointer-events: none;
  }
      `}</style>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "11px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          margin: "0 0 6px 0",
        }}
      >
        Try It Yourself
      </p>
      <p style={{ color: "white", fontWeight: "bold", margin: "0 0 16px 0" }}>
        Type a prompt. Watch the water rise.
      </p>
      {/* CUP WRAPPER — relative so drop can fall into it */}
      <div style={{ position: "relative", width: "100px", margin: "0 auto" }}>
        {/* FALLING DROP — from falling.md */}
        {/* only show drop when dropping is true */}
        {dropping && (
          <div
            style={{
              position: "absolute",
              top: `${dropTop}px`,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "1.2rem",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            💧
          </div>
        )}

        {/* THE GLASS */}
        <div
          style={{
            width: "80px",
            height: "160px",
            border: "3px solid #38bdf8",
            borderRadius: "0 0 16px 16px",
            margin: "20px auto",
            position: "relative",
            overflow: "hidden", //hide water when it goes above the cup
            magin: "20px auto",
            background: "#c6d6faff",
          }}
        >
          {/* WATER FILL */}
          {waterLevel > 0 && (
            //only show water when waterLevel is greater than 0
            <div
              //water-fill is a class name that is used to animate the water fill
              className="water-fill"
              style={{
                position: "absolute",
                width: "200%",
                bottom: 0,
                left: "-50%",
                height: `${waterLevel}%`, //fill water up to this percentage
                background: "linear-gradient(180deg, #38bdf8 0%, #0369a1 100%)",
                transition: "height 0.6s ease", //smooth water fill
              }}
            >
              {/* SPARKS — little white dots floating up */}
              <div
                className="spark"
                style={{ left: "20%", top: "60%", animationDelay: "0s" }}
              />
              <div
                className="spark"
                style={{ left: "35%", top: "40%", animationDelay: "0.3s" }}
              />
              <div
                className="spark"
                style={{ left: "50%", top: "70%", animationDelay: "0.6s" }}
              />
              <div
                className="spark"
                style={{ left: "65%", top: "50%", animationDelay: "0.9s" }}
              />
              <div
                className="spark"
                style={{ left: "80%", top: "30%", animationDelay: "1.2s" }}
              />
            </div>
          )}
        </div>
      </div>

      {/* STATS — uses promptCount*/}
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#e4f5fdff",
          margin: "20px 0 20px 0",
        }}
      >
        {promptCount}
      </p>
      <p style={{ color: "#42474fff", margin: "4px 0 0 0" }}>
        prompts ·{" "}
        <span
          style={{ color: "#e4f5fdff", fontWeight: "bold", fontSize: "1.6rem" }}
        >
          {promptCount * 500}ml
        </span>{" "}
        used
      </p>

      {promptCount > 0 && (
        <p style={{ color: "#41484bff", fontSize: "13px", marginTop: "8px" }}>
          Each prompt costs ~500ml of water 💧
        </p>
      )}

      {/* INPUT & BUTTON */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          //call handleSend when enter key is pressed
          onKeyDown={(e) => e.key === "Enter" && handleSend()} //allow enter key to send prompt
          placeholder={currentPlaceholder}
          style={{
            padding: "10px",
            borderRadius: "8px",
            width: "350px",
            border: "1px solid #38bdf8",
            marginRight: "8px",
            background: "#a1b8ddff",
            color: "white",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "10px 20px",
            background: "#38bdf8",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
        {/* RESET BUTTON — always visible once prompts sent */}
        {/* only show reset button when promptCount is greater than 0 */}
        {promptCount > 0 && (
          <button
            onClick={handleReset}
            style={{
              marginTop: "16px",
              background: "transparent",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#5a5a5cff",
              padding: "6px 14px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            🔄 Reset water
          </button>
        )}
      </div>
    </div>
  );
}
