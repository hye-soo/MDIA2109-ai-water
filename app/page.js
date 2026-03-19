"use client";
import { useState } from "react";
import "./globals.css";
import HeroSection from "./components/start";
import QuizSection from "./components/quiz";
import ExploreSection from "./components/explore"; // ← add this

export default function Home() {
  const [phase, setPhase] = useState("intro");

  return (
    <main>
      {phase === "intro" && <HeroSection onStart={() => setPhase("quiz")} />}
      {phase === "quiz" && <QuizSection onDone={() => setPhase("explore")} />}
      {phase === "explore" && (
        <ExploreSection onRestart={() => setPhase("intro")} /> // ← fix prop name + goes back to intro
      )}
    </main>
  );
}
