import { type Variants } from "framer-motion";

// Fade in from top: starts above, fades in while moving down
export const fadeInFromTop: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

// Fade in from bottom: starts below, fades in while moving up
export const fadeInFromBottom: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

// Fade in with scale: starts smaller and transparent, scales up while fading in
export const scaleFadeIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

// Slide in from left: starts off-screen left, slides in
export const slideInFromLeft: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
  },
};

// Slide in from right: starts off-screen right, slides in
export const slideInFromRight: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
  },
};

// Rotate and fade in: starts rotated and transparent, rotates to normal while fading in
export const rotateFadeIn: Variants = {
  initial: { opacity: 0, rotate: -10 },
  animate: {
    opacity: 1,
    rotate: 0,
  },
};

// Pulse effect: subtle scale pulsing for emphasis (e.g., for buttons)
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

// Fade in with delay (for staggered animations): simple fade with customizable delay
export const fadeInWithDelay: (delay: number) => Variants = (
  delay: number
) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});
