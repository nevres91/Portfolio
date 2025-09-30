import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

export const useInViewAnimation = ({
  amount,
  once,
  opacity,
  duration,
}: {
  amount: number;
  once: boolean;
  opacity: number;
  duration: number;
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, amount }); // Trigger when ?? % of the element is visible

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: opacity,
        x: 0,
        y: 0,
        transition: { duration: duration, ease: "easeInOut" },
      });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [isInView, controls]);

  return { ref, controls };
};
