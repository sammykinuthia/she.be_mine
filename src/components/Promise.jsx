// components/Promise.jsx
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

export default function Promise() {
  return (
    <ParallaxSection>
    <div className="promise">
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <p>
          Esther,<br /><br />
          I won’t promise perfection.  
          I promise presence.  
          I promise effort.  
          I promise choosing you — even on hard days.
          <br /><br />
          That’s my Valentine promise.
        </p>
      </motion.div>
    </div>
    </ParallaxSection>
  );
}
