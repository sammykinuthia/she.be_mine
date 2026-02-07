// components/Letter.jsx
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";


export default function Letter() {
  return (
    <ParallaxSection>
    <div className="letter">
      <motion.div
        className="paper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p>
          Esther,  
          <br /><br />
          This isn’t about grand promises.  
          It’s about choosing you — intentionally, honestly,
          and with effort.
          <br /><br />
          I don’t want perfect.  
          I want real.
        </p>
      </motion.div>
    </div>
    </ParallaxSection>
  );
}
