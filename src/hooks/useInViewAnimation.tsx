import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

export const useInViewAnimation = ({
  amount,
  once,
  opacity,
  duration,
  delay,
}: {
  amount: number;
  once: boolean;
  opacity: number;
  duration: number;
  delay?: number;
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
        scale: 1,
        transition: {
          duration: duration,
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: delay,
        },
      });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [isInView, controls]);

  return { ref, controls };
};
