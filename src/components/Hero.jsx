// components/Hero.jsx
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";


export default function Hero() {
  return (
    <ParallaxSection>
      <div className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Esther Wanjiru Kamunye
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          This is not just a Valentine.
          This is intention. This is love.
        </motion.p>

        <span className="scroll">Scroll slowly ↓</span>
      </div>
    </ParallaxSection>
  );
}
