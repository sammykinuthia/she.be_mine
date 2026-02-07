import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // 👇 NON-LINEAR curve (THIS is the magic)
  const curved = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [120, 40, 0, -40, -120]
  );

  // 👇 SPRING = resistance + hesitation
  const y = useSpring(curved, {
    stiffness: 40,
    damping: 20,
    mass: 1.2
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]),
    { stiffness: 40, damping: 20 }
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );

  return (
    <motion.section
      ref={ref}
      style={{ y, scale, opacity }}
    >
      {children}
    </motion.section>
  );
}
