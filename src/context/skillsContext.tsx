import { createContext, useContext, type ReactNode } from "react";

// Define the type for a single skill (based on your data structure)
interface Skill {
  index: number;
  title: string;
  url: string;
  alt: string;
  offsetLg?: number;
  offsetMd?: number;
  offsetSm?: number;
  offset?: number; // Optional, as seen in your data
}

// The skills data (you can move this here or keep it separate)
const skillsData: Skill[] = [
  {
    index: 0,
    title: "HTML",
    url: "/src/assets/img/HTML.png",
    alt: "An icon of HTML logo",
    offsetLg: 700,
    offsetMd: 600,
    offsetSm: 300,
  },
  {
    index: 1,
    title: "CSS",
    url: "/src/assets/img/Css.png",
    alt: "An icon of CSS logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 300,
  },
  {
    index: 2,
    title: "Tailwind CSS",
    url: "/src/assets/img/Tailwind.png",
    alt: "An icon of Tailwind CSS logo",
    offsetLg: 400,
    offsetMd: 300,
    offsetSm: 400,
  },
  {
    index: 3,
    title: "Material UI",
    url: "/src/assets/img/MUI.png",
    alt: "An icon of Material UI logo",
    offsetLg: 400,
    offsetMd: 300,
    offsetSm: 400,
  },
  {
    index: 4,
    title: "Javascript",
    url: "/src/assets/img/JS.png",
    alt: "An icon of Javascrypt logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 500,
  },
  {
    index: 5,
    title: "Typescript",
    url: "/src/assets/img/Typescript.png",
    alt: "An icon of Typescript logo",
    offsetLg: 700,
    offsetMd: 600,
    offsetSm: 500,
  },
  {
    index: 6,
    title: "React",
    url: "/src/assets/img/react.png",
    alt: "An icon of React logo",
    offset: 1000,
    offsetMd: 900,
    offsetSm: 600,
  },
  {
    index: 7,
    title: "Vite",
    url: "/src/assets/img/Vite.png",
    alt: "An icon of Vite logo",
    offsetLg: 800,
    offsetMd: 700,
    offsetSm: 600,
  },
  {
    index: 8,
    title: "Firebase",
    url: "/src/assets/img/Firebase.png",
    alt: "An icon of Firebase logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 700,
  },
  {
    index: 9,
    title: "Figma",
    url: "/src/assets/img/FIGMA.png",
    alt: "An icon of Figma logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 700,
  },
  {
    index: 10,
    title: "Cinema4D",
    url: "/src/assets/img/Cinema4D.png",
    alt: "An icon of Cinema4D logo",
    offsetLg: 800,
    offsetMd: 700,
    offsetSm: 800,
  },
  {
    index: 11,
    title: "Photoshop",
    url: "/src/assets/img/Photoshop.png",
    alt: "An icon of Photoshop logo",
    offsetLg: 1000,
    offsetMd: 900,
    offsetSm: 800,
  },
];

// Context type
interface SkillsContextType {
  skills: Skill[];
}

// Create the context
const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

// Provider component
export const SkillsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SkillsContext.Provider value={{ skills: skillsData }}>
      {children}
    </SkillsContext.Provider>
  );
};

// Custom hook to consume the context
export const useSkills = () => {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error("useSkills must be used within a SkillsProvider");
  }
  return context;
};
