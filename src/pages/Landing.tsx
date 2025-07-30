import Navbar from "../components/ui/layout/Navbar";
import AboutMe from "../components/ui/layout/sections/AboutMe";
import Contact from "../components/ui/layout/sections/Contact";
import Home from "../components/ui/layout/sections/Home";
import Projects from "../components/ui/layout/sections/Projects";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-dark text-white">
      <div className="absolute inset-0 noise z-10"></div>
      <div className="relative z-20">
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
