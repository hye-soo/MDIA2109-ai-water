"use client";

import { useState } from "react";

export default function WaterSimulator() {
  const [promptText, setPromptText] = useState("");
  const [promptCount, setPromptCount] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);

  function handleSend() {
    if (!promptText.trim()) return;
    setPromptCount(promptCount + 1);
    setWaterLevel(Math.min(waterLevel + 18, 100));
    setPromptText("");
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Try It Yourself</h2>
      <p>Type a prompt. Watch the water rise.</p>

      {/* THE GLASS */}
      <div
        style={{
          width: "80px",
          height: "150px",
          border: "3px solid #38bdf8",
          borderRadius: "0 0 12px 12px",
          margin: "20px auto",
          position: "relative",
          overflow: "hidden",
          background: "#0f172a",
        }}
      >
        {/* WATER FILL */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: `${waterLevel}%`,
            background: "#38bdf8",
            transition: "height 0.6s ease",
          }}
        />
      </div>

      {/* PROMPT COUNT */}
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Prompts:{promptCount}
      </p>

      {/* INPUT & BUTTON */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a prompt"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #38bdf8",
            marginRight: "8px",
            background: "#1e293b",
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
        <div className="water-container">
          <div className="water" style={{ height: `${waterLevel}%` }}></div>
        </div>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {promptCount * 500}ml used
        </p>
      </div>
    </div>
  );
}
