import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

export const useInViewAnimation = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.9 }); // Trigger when ?? % of the element is visible

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 0.4,
        x: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [isInView, controls]);

  return { ref, controls };
};
