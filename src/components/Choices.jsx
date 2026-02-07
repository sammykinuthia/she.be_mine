// components/Choices.jsx
import { useState } from "react";
import ParallaxSection from "./ParallaxSection";

export default function Choices() {
  const [choice, setChoice] = useState("");

  return (
    <ParallaxSection>
    <section className="choices">
      <h2>Quick Question 😏</h2>
      <p>Choose what sounds like us:</p>

      <div className="choice-buttons">
        <button onClick={() => setChoice("late")}>
          Late-night talks 🌙
        </button>
        <button onClick={() => setChoice("random")}>
          Random laughter 😂
        </button>
      </div>

      {choice && (
        <p className="choice-result">
          Of course… it’s <strong>{choice === "late" ? "both" : "both"}</strong>.
        </p>
      )}
    </section>
    </ParallaxSection>
  );
}
