"use client";
import { useState } from "react";
import "./globals.css";
import HeroSection from "./components/start";
import QuizSection from "./components/quiz";

export default function Home() {
  const [phase, setPhase] = useState("intro");

  return (
    <main>
      {phase === "intro" && <HeroSection onStart={() => setPhase("quiz")} />}
      {phase === "quiz" && <QuizSection onDone={() => setPhase("intro")} />}
    </main>
  );
}
