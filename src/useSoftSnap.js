import { useEffect, useRef } from "react";

export default function useSoftSnap() {
  const timeout = useRef(null);

  useEffect(() => {
    const onScrollEnd = () => {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        const sections = document.querySelectorAll("section");

        let closest = null;
        let minDistance = Infinity;

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const distance = Math.abs(center - window.innerHeight / 2);

          if (distance < minDistance) {
            minDistance = distance;
            closest = section;
          }
        });

        if (closest) {
          closest.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }, 120); // ← sweetness delay
    };

    window.addEventListener("scroll", onScrollEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollEnd);
      clearTimeout(timeout.current);
    };
  }, []);
}
