// src/hooks/useScrollFade.ts
import { useState, useEffect } from "react";

export const useScrollFade = (threshold: number = 300): number => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const newOpacity =
        scrollPosition >= threshold
          ? 0
          : 1 - (scrollPosition / threshold) * 0.5;
      setOpacity(Math.max(0, Math.min(1, newOpacity))); // Clamp between 0 and 1
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [threshold]);

  return opacity;
};
