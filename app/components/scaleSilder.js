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
  const litresPerDay = users * perPersonLitres;
  //showers = how many showers are equivalent to the litres used per day
  const showers = Math.round(litresPerDay * 0.65);
  const poopCount = Math.min(
    10,
    Math.floor((users / 99) * 10) + Math.floor(promptCount / 10),
  );
  const smileyCount = 10 - poopCount;

  return (
    <div
      style={{
        background: "#f9f9f9",
        border: "1px solid #334155",
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <h3 style={{ color: "#313132ff", margin: "0 0 4px 0" }}>
        Now Scale It Up Drag to see the impact
      </h3>
      <p style={{ color: "#94a3b8", margin: "0 0 16px 0", fontSize: "14px" }}>
        Send a prompt first to see the scaled impact!
      </p>

      {/* SLIDER */}
      <input
        type="range"
        min="1"
        max="99"
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
            display: "grid",
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
              {users}
            </span>
            <span
              style={{ color: "#64748b", fontSize: "13px", marginLeft: "6px" }}
            >
              People Usage<span style={{ fontSize: "1.8rem" }}>🧑‍🤝‍🧑</span>
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
              {litresPerDay}L
            </span>
            <span
              style={{ color: "#64748b", fontSize: "13px", marginLeft: "6px" }}
            >
              Water Lost/Day <span style={{ fontSize: "1.8rem" }}>💦</span>
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
              {showers}
            </span>
            <span
              style={{
                color: "#64748b",
                fontSize: "13px",
                marginLeft: "6px",
              }}
            >
              Lose Showers <span style={{ fontSize: "1.8rem" }}>🛁</span>
            </span>
            <div style={{ borderLeft: "1px solid #dae4ffff" }} />
          </div>
        </div>
      )}

      {/* connection note — shows who sent what */}
      {/* if promptcount > 0 (only show when at least one prompt has been sent), show the connection note */}
      {promptCount > 0 && (
        <p style={{ color: "#64748b", fontSize: "12px", marginTop: "12px" }}>
          Each of {users} people sends {promptCount} prompt
          {/* if promptcount is greater than 1, add an "s" to "prompt" */}
          {promptCount > 1 ? "s" : ""} × 0.5L each
        </p>
      )}
      {users > 1 && (
        <div
          style={{
            borderRadius: "16px",
            padding: "8px 0",
            marginTop: "8px",
          }}
        >
          <p
            style={{
              color: "#64748b",
              fontSize: "12px",
              margin: "0 0 6px 0",
            }}
          ></p>
          <p
            style={{
              position: "relative",
              minWidth: "100%",
              fontSize: "1.5rem",
              margin: "0",
            }}
          >
            {"😊".repeat(smileyCount)}
            {"💩".repeat(poopCount)}
          </p>
        </div>
      )}
    </div>
  );
}
