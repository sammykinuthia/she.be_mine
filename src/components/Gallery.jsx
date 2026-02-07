// components/Gallery.jsx
import ParallaxSection from "./ParallaxSection";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <ParallaxSection>
      <div className="gallery-grid">
        <motion.img
          src="/esther1.jpeg"
          alt="Esther"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />

        <motion.img
          src="/esther2.jpeg"
          alt="Esther"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />
         <motion.img
          src="/esther3.jpeg"
          alt="Esther"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />

        {/* <motion.img
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"
          alt="Love"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        /> */}
      </div>

      <p className="caption">
        Love isn’t perfect — it’s real.
      </p>
    </ParallaxSection>
  );
}
