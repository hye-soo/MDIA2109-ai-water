"use client";
import InfoCard from "./infoCard";
import WaterSimulator from "./waterfillup";
import ScaleSlider from "./scaleSilder";
import { useState } from "react";
export default function ExploreSection({ onRestart }) {
  const [promptCount, setPromptCount] = useState(0);
  //reset prompt count when restart
  function handleRestart() {
    setPromptCount(0);
  }
  return (
    <div style={{ paddingTop: "80px", maxWidth: "1100px", margin: "0 auto" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>💧</span>
        <h1 style={{ color: "white", margin: 0, fontSize: "1.4rem" }}>
          Every Prompt <span style={{ color: "#38bdf8" }}>Drinks Water</span>
        </h1>
        {/* RESTART BUTTON — pushed to the right with marginLeft auto */}
        <button
          onClick={onRestart}
          style={{
            marginLeft: "auto",
            background: "transparent",
            border: "1px solid #334155",
            borderRadius: "8px",
            color: "#76c6d2ff",
            padding: "6px 14px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Return to Home
        </button>
      </div>

      {/* 2 COLUMN GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* pass setter DOWN so WaterSimulator can update the count */}
          <WaterSimulator
            onPromptSent={() => setPromptCount(promptCount + 1)}
            onReset={handleRestart}
            promptCount={promptCount}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "100%",
          }}
        >
          {/* pass count DOWN so ScaleSlider can use it */}
          <ScaleSlider promptCount={promptCount} />
          <InfoCard />
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#475569",
          fontSize: "13px",
          marginTop: "20px",
        }}
      >
        Every choice matters — even how we build AI.
      </p>
    </div>
  );
}
