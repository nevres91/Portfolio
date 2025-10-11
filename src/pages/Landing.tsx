import { Footer } from "../components/ui/layout/Footer";
import Navbar from "../components/ui/layout/Navbar";
import AboutMe from "../components/ui/layout/sections/AboutMe";
import Contact from "../components/ui/layout/sections/Contact";
import Home from "../components/ui/layout/sections/Home";
import Projects from "../components/ui/layout/sections/Projects";
import { Skills } from "../components/ui/layout/sections/Skills";
import { ProjectsProvider } from "../context/ProjectsContext";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Landing() {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container?: any) => {
    console.log("Particles loaded!", container);
  };
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className={`hidden md:block absolute inset-0 noise z-10`}></div>
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0 hidden lg:block"
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          fpsLimit: 30,
          particles: {
            number: { value: 20, density: { enable: true, area: 500 } },
            color: { value: "#ff1100" },
            shape: { type: "triangle" },
            opacity: { value: 0.15 },
            size: { value: 4 },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: "out",
            },
            links: {
              enable: true,
              color: "#D84040",
              distance: 50,
              opacity: 0.3,
              width: 5,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100 } },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-20 flex flex-col items-center ">
        <Navbar animate={true} />
        <Home />
        <AboutMe />
        <Skills />
        <ProjectsProvider>
          <Projects />
        </ProjectsProvider>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
