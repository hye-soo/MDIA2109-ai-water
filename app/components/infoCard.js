"use client";

import { useState } from "react";

// --- DATA (your 4 cards defined as an array) ---
const SOLUTIONS = [
  {
    id: "cooling",
    label: "Traditional Cooling",
    icon: "💧",
    impact: "High water use",
    impactColor: "#f87171",
    description:
      "Most data centers use evaporative cooling towers, consuming massive amounts of freshwater just to keep servers at safe operating temperatures.",
  },
  {
    id: "recycled",
    label: "Recycled Water",
    icon: "♻️",
    impact: "−80% freshwater",
    impactColor: "#38bdf8",
    description:
      "Forward-thinking facilities now use treated wastewater or grey water for cooling, slashing freshwater consumption by up to 80%.",
  },
  {
    id: "zero",
    label: "Zero-Water Cooling",
    icon: "🌿",
    impact: "Near-zero water",
    impactColor: "#86efac",
    description:
      "Next-gen facilities use ambient air, liquid immersion cooling, or strategically locate in cold climates to eliminate water use.",
  },
  {
    id: "efficient",
    label: "Efficient Models",
    icon: "⚡",
    impact: "Systemic change",
    impactColor: "#86efac",
    description:
      "Smaller, distilled AI models need dramatically less computation — and therefore less cooling water — per query you send.",
  },
];

export default function InfoCard() {
  // --- STATE ---
  // just tracks which card is open. null = none open
  const [activeCard, setActiveCard] = useState(null);

  // --- CLICK HANDLER ---
  function handleClick(id) {
    // if this card is already open → close it (null)
    // if it's closed → open it (set its id)
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  }
  return (
    <div
      style={{
        background: "#1e293b",
        border: "1px solid #334155",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "20px",
      }} //outercard container
    >
      <h3 style={{ color: "white", margin: "0 0 4px 0" }}>
        Can It Be Done Differently?
      </h3>
      <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 16px 0" }}>
        Click a card to explore
      </p>

      {/* 4 CARDS — using .map() from your render process guide */}
      {/* A CSS grid with 4 equal columns — one per card. .map() loops over the SOLUTIONS array and returns a <div> for each item. */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {SOLUTIONS.map((card) => {
          // is THIS card the open one?
          //true only if this card's id matches the activeCard state
          const isOpen = activeCard === card.id;
          return (
            <div
              key={card.id} //key is used to identify each card
              onClick={() => handleClick(card.id)}
              style={{
                //when isOpen is true,card gets blue border and brighher background
                background: isOpen
                  ? "rgba(74, 120, 228, 0.6)"
                  : //closed = dark background
                    "rgba(15, 23, 42, 0.6)",
                border: isOpen ? "1px solid #38bdf8" : "1px solid #334155",
                borderRadius: "12px",
                padding: "12px",
                cursor: "pointer",

                // smooth color change on click — no packages needed!
                transition: "background 0.2s ease, border 0.2s ease",
              }}
            >
              {/* ICON */}
              {/* emoji at top */}
              <p style={{ fontSize: "1.4rem", margin: "0 0 6px 0" }}>
                {card.icon}
              </p>
              {/* LABEL */}
              {/* label at top */}
              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  margin: "0 0 4px 0",
                  lineHeight: "1.3",
                }}
              >
                {card.label}
              </p>

              {/* IMPACT BADGE */}
              {/* impact badge at bottom */}
              <p
                style={{
                  color: card.impactColor,
                  fontSize: "11px",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {card.impact}
              </p>
            </div>
          );
        })}
      </div>
      {/* DESCRIPTION BOX — only shows when a card is open, using activeCard state is not 'null*/}
      {activeCard && ( //if activeCard is not null, show the description box
        <div
          style={{
            marginTop: "12px",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: "12px",
            padding: "14px",
            transition: "all 0.3s ease",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            {/* find the card that matches the activeCard state (id matches activeCard) and return its description */}
            {SOLUTIONS.find((s) => s.id === activeCard).description}
          </p>
        </div>
      )}
    </div>
  );
}
