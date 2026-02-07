// components/Intro.jsx
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";


export default function Intro() {
  return (
    <ParallaxSection>
    <div className="intro">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Esther Wanjiru Kamunye
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Somewhere between laughter, chaos, and calm…  
        I found you.
      </motion.p>

      <span className="scroll-hint">↓ scroll slowly</span>
    </div>
    </ParallaxSection>
  );
}
