import { Footer } from "../components/ui/layout/Footer";
import Navbar from "../components/ui/layout/Navbar";
import AboutMe from "../components/ui/layout/sections/AboutMe";
import Contact from "../components/ui/layout/sections/Contact";
import Home from "../components/ui/layout/sections/Home";
import Projects from "../components/ui/layout/sections/Projects";
import { Skills } from "../components/ui/layout/sections/Skills";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 noise z-10"></div>
      <div className="relative z-20 flex flex-col items-center ">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
