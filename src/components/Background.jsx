// src/components/Background.jsx
import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const container = document.querySelector(".petals");

    for (let i = 0; i < 25; i++) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 10 + Math.random() * 10 + "s";
      petal.style.animationDelay = Math.random() * 5 + "s";
      container.appendChild(petal);
    }
  }, []);

  return <div className="petals"></div>;
}
