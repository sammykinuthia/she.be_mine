// components/Quotes.jsx
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";


const quotes = [
  "Love is not found. It is built — quietly, daily, intentionally.",
  "You are the calm my heart recognizes.",
  "I don’t want forever with everyone. I want it with you.",
  "In a world of uncertainty, you feel like home.",
  "This love is not loud — it is deep."
];


export default function Quotes() {
  return (
    <ParallaxSection>
    <section className="quotes">
      {quotes.map((q, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 }}
        >
          “{q}”
        </motion.p>
      ))}
    </section>
    </ParallaxSection>
  );
}
