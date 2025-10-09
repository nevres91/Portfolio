import { Footer } from "../components/ui/layout/Footer";
import Navbar from "../components/ui/layout/Navbar";
import AboutMe from "../components/ui/layout/sections/AboutMe";
import Contact from "../components/ui/layout/sections/Contact";
import Home from "../components/ui/layout/sections/Home";
import Projects from "../components/ui/layout/sections/Projects";
import { Skills } from "../components/ui/layout/sections/Skills";
import { ProjectsProvider } from "../context/ProjectsContext";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className={`hidden md:block absolute inset-0 noise z-10`}></div>
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
