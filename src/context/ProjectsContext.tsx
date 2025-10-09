import { createContext, useContext, type ReactNode } from "react";
import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "WeDoIt",
    description:
      "A user-friendly app crafted for couples to manage shared tasks effortlessly. Create, assign, and track to-dos together, keeping your household or plans in sync. With a clean interface and real-time updates, it makes teamwork simple and fun, ensuring you both stay on top of what matters.",
    image: "/src/assets/img/wedoit_image.jpg",
    githubUrl: "https://github.com/nevres91/WeDoIt",
    liveUrl: "https://coupledo.netlify.app/",
    used_skills: [0, 1, 2, 4, 5, 6, 8],
    color: "yellow",
  },
  {
    id: "2",
    title: "ATM Simulation",
    description:
      "ATM Simulator App: A programming project demonstrating core banking functionalities. Users can create a bank account, deposit funds, withdraw money, and check their balance. Built to showcase skills in user input handling, data management, and basic financial transaction logic.",
    image: "/src/assets/img/atm_simulation_image.jpg",
    color: "blue",
    liveUrl: "https://atmsimulation.netlify.app/",
    githubUrl: "https://github.com/nevres91/atm",
    used_skills: [],
  },
  {
    id: "3",
    title: "Motion Magic",
    description:
      " A project utilizing a movies API to display trending and upcoming films. Users can explore detailed movie information, including titles, release dates, and descriptions. Built to demonstrate API integration, data fetching, and dynamic content rendering skills",
    image: "/src/assets/img/motion_magic_image.jpg",
    liveUrl: "https://motion-magic.netlify.app/",
    githubUrl: "https://github.com/nevres91/MotionMagic",
    used_skills: [],
    color: "purple",
  },
  {
    id: "4",
    title: "Dirty Riders",
    description:
      "A project showcasing a dynamic webpage for my YouTube channel, built with JavaScript, React, and Redux Toolkit. The app fetches and displays my YouTube videos, enabling users to browse content seamlessly. Demonstrates proficiency in front-end development, state management, and API integration.",
    image: "/src/assets/img/dirty_riders_img.jpg",
    liveUrl: "https://dirty-riders.netlify.app/",
    githubUrl: "https://github.com/nevres91/YoutubeChannel",
    used_skills: [],
    color: "brown",
  },
  {
    id: "5",
    title: "PuckPal",
    description:
      " A fun project for PC game ClusterPuck 99, entirely AI-generated with some tweaking, for real-time score tracking. The app allows users to monitor and record game scores seamlessly. Showcases proficiency in leveraging AI tools for app development, Firebase integration, and real-time data management.",
    image: "/src/assets/img/puckpal_img.jpg",
    liveUrl: "https://clusterpuck.netlify.app/tournament",
    githubUrl: "https://github.com/nevres91/studio",
    used_skills: [],
    color: "cyan",
  },
];

// Context type
interface ProjectsContextType {
  projects: Project[];
}

// Create the context
const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined
);

// Provider component
export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectsContext.Provider value={{ projects: projectsData }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Custom hook to consume the context
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
