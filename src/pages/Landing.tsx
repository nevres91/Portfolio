import Navbar from "../components/ui/layout/Navbar";
import AboutMe from "../components/ui/layout/sections/AboutMe";
import Contact from "../components/ui/layout/sections/Contact";
import Home from "../components/ui/layout/sections/Home";
import Projects from "../components/ui/layout/sections/Projects";

export default function Landing() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
