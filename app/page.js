"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import HeroSection from "./components/start";
import QuizSection from "./components/quiz";
import ExploreSection from "./components/explore";

export default function Home() {
  const [phase, setPhase] = useState("intro");

  return (
    <main>
      {phase === "intro" && <HeroSection onStart={() => setPhase("quiz")} />}
      {phase === "quiz" && <QuizSection onDone={() => setPhase("explore")} />}
      {phase === "explore" && (
        <ExploreSection onRestart={() => setPhase("intro")} />
      )}
      {/* {phase === "explore" && <ExploreSection />} */}
    </main>
  );
}
