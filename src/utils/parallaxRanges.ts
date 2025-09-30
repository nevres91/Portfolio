import { useMediaQuery } from "../hooks/useMediaQuery"; // Adjust path to your useMediaQuery hook

// Type for parallax ranges (e.g., [start, end] for y or opacity)
export type ParallaxRange = [number, number];

// Interface for range configuration per breakpoint
interface ParallaxConfig {
  mobile: ParallaxRange; // <640px
  sm: ParallaxRange; // ≥640px
  md: ParallaxRange; // ≥768px
  lg: ParallaxRange; // ≥1024px
}

// Define ranges for each element
const portfolioConfig: ParallaxConfig = {
  mobile: [0, 500],
  sm: [0, 300],
  md: [0, 400],
  lg: [0, 500],
};

const welcomeConfig: ParallaxConfig = {
  mobile: [0, 130],
  sm: [0, 160],
  md: [0, 350],
  lg: [0, 300],
};
const websiteConfig: ParallaxConfig = {
  mobile: [0, -30],
  sm: [0, -30],
  md: [0, 180],
  lg: [0, 40],
};
const aboutMeTitleY: ParallaxConfig = {
  mobile: [0, -30],
  sm: [0, -30],
  md: [0, 180],
  lg: [250, 0],
};
const aboutMeSectionY: ParallaxConfig = {
  mobile: [0, -30],
  sm: [0, -30],
  md: [0, 180],
  lg: [0, -700],
};

const contactOpacityConfig: ParallaxConfig = {
  mobile: [0, 0.35],
  sm: [0, 0.4],
  md: [0, 0.45],
  lg: [0, 0.3],
};

// Function to get parallax range based on screen size
export const getParallaxRange = (config: ParallaxConfig): ParallaxRange => {
  const isSm: boolean = useMediaQuery("(min-width: 640px)");
  const isMd: boolean = useMediaQuery("(min-width: 768px)");
  const isLg: boolean = useMediaQuery("(min-width: 1024px)");

  return isLg ? config.lg : isMd ? config.md : isSm ? config.sm : config.mobile;
};

// Export individual ranges
export const getPortfolioYRange = (): ParallaxRange =>
  getParallaxRange(portfolioConfig);
export const getWebsiteYRange = (): ParallaxRange =>
  getParallaxRange(websiteConfig);
export const getContactOpacityRange = (): ParallaxRange =>
  getParallaxRange(contactOpacityConfig);
export const getWelcomeYRange = (): ParallaxRange =>
  getParallaxRange(welcomeConfig);
export const getAboutMeTitleRange = (): ParallaxRange =>
  getParallaxRange(aboutMeTitleY);
export const getAboutMeSectionRange = (): ParallaxRange =>
  getParallaxRange(aboutMeSectionY);
