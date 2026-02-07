import { useState } from "react";
import ParallaxSection from "./ParallaxSection";


const memories = [
  "The way you smile without trying.",
  "How peace follows you.",
  "Your laughter on random days.",
  "How you feel like home."
];

export default function Memory() {
  const [msg, setMsg] = useState("Tap to reveal a thought 💌");

  return (
    <ParallaxSection>
    <section className="memory">
      <div
        className="memory-card"
        onClick={() =>
          setMsg(memories[Math.floor(Math.random() * memories.length)])
        }
      >
        {msg}
      </div>
    </section>
    </ParallaxSection>
  );
}
