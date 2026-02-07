// components/Reasons.jsx
import { motion } from "framer-motion";
import { FaSmile, FaHeart, FaFire } from "react-icons/fa";
import ParallaxSection from "./ParallaxSection";

const reasons = [
  { icon: <FaSmile />, text: "You make ordinary days feel lighter." },
  { icon: <FaFire />, text: "You challenge me — in the best way." },
  { icon: <FaHeart />, text: "With you, peace feels natural." },
];

export default function Reasons() {
  return (
    <ParallaxSection>
    <section className="reasons">
      <h2>Why You?</h2>
      <div className="cards">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="icon">{r.icon}</span>
            <p>{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </ParallaxSection>
  );
}
