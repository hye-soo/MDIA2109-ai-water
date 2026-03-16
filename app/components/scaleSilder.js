"use client";

import { useState } from "react";

//promptCount = how many prompts the user sent in the WaterSimulator
//it is the number of prompts that have been sent
//it is used to calculate the scaled impact

export default function ScaleSlider({ promptCount }) {
  //tracks slider value =  how many millions of users to simulate. Starts at 1.
  const [users, setUsers] = useState(1);
  //perPersonLitres = how many litres each person uses
  const perPersonLitres = promptCount * 0.5;
  //litresPerDay = how many litres are used per day
  const litresPerDay = users * 1000000 * perPersonLitres;
  //showers = how many showers are equivalent to the litres used per day
  const showers = Math.round(litresPerDay / 65);
  //fmt = format numbers to be more readable
  function fmt(n) {
    if (n >= 1000000000) return (n / 1000000000).toFixed(1) + "B";
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n.toString();
  }

  return (
    <div
      style={{
        background: "#a7c0faff",
        border: "1px solid #334155",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h3 style={{ color: "white", margin: "0 0 4px 0" }}>
        Now Scale It Up Drag to see the impact
      </h3>
      <p style={{ color: "#94a3b8", margin: "0 0 16px 0", fontSize: "14px" }}>
        Send a prompt first to see the scaled impact!
      </p>

      {/* SLIDER */}
      <input
        type="range"
        min="1"
        max="100"
        value={users}
        //setUsers = updates the slider value (calculates the scaled impact)
        //e.target.value = the value of the slider
        onChange={(e) => setUsers(e.target.value)}
        style={{
          width: "100%",
          accentColor: "#38bdf8",
          cursor: "pointer",
          marginBottom: "16px",
        }}
      />

      {/* CONDITIONAL DISPLAY */}
      {/* if no prompts have been sent yet, show placeholder text
      Once promptcount > 0, show the scaled impact     */}
      {promptCount === 0 ? (
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>
          ✏️ Send a prompt in the water simulator first to see scaled impact
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            marginTop: "16px",
          }}
        >
          {/* USERS */}
          <div>
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#464d50ff",
              }}
            >
              {users}M
            </span>
            <span
              style={{ color: "#94a3b8", fontSize: "13px", marginLeft: "6px" }}
            >
              people<span style={{ fontSize: "1.8rem" }}>🧑‍🤝‍🧑</span>
            </span>
          </div>

          {/* Divider */}
          <div style={{ borderLeft: "1px solid #dae4ffff" }} />

          {/* LITRES */}
          <div>
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#464d50ff",
              }}
            >
              {fmt(litresPerDay)}L
            </span>
            <span
              style={{ color: "#94a3b8", fontSize: "13px", marginLeft: "6px" }}
            >
              water/day <span style={{ fontSize: "1.8rem" }}>💦</span>
            </span>
          </div>
          {/* DIVIDER */}
          <div style={{ borderLeft: "1px solid #dae4ffff" }} />
          {/* SHOWERS */}
          <div>
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#464d50ff",
              }}
            >
              {fmt(showers)}
            </span>
            <span
              style={{ color: "#94a3b8", fontSize: "13px", marginLeft: "6px" }}
            >
              showers <span style={{ fontSize: "1.8rem" }}>🛁</span>
            </span>
          </div>
        </div>
      )}

      {/* connection note — shows who sent what */}
      {/* if promptcount > 0 (only show when at least one prompt has been sent), show the connection note */}
      {promptCount > 0 && (
        <p style={{ color: "#64748b", fontSize: "12px", marginTop: "12px" }}>
          Each of {users}M people sends {promptCount} prompt
          {/* if promptcount is greater than 1, add an "s" to "prompt" */}
          {promptCount > 1 ? "s" : ""} × 0.5L each
        </p>
      )}
    </div>
  );
}
