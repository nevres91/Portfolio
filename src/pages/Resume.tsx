import { useEffect } from "react";
import Button from "../components/ui/Button";
import { Footer } from "../components/ui/layout/Footer";
import Navbar from "../components/ui/layout/Navbar";
import resume from "/src/assets/cv_final.pdf";
import resume_image from "/src/assets/cv_final.jpg";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Define the component with React.FC for type safety
const Resume: React.FC = () => {
  // Handle PDF download
  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container?: any) => {
    console.log("Particles loaded!", container);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar animate={false} />
      <section className="relative  bg-black flex flex-col items-center pt-20 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, ease: "easeOut", delay: 0 }}
          className="absolute left-[0%] md:left-[10%] lg:left-[5%] w-[300px] md:w-[390px] lg:w-[550px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/30 blur-[80px] opacity-40 z-20"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, ease: "easeOut", delay: 0 }}
          className="absolute left-[0%] md:left-[10%] lg:left-[10%] top-[50%] md:top-[55%] lg:top-[65%] w-[320px] md:w-[290px] lg:w-[350px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/30 blur-[80px] opacity-40 z-20"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, ease: "easeOut", delay: 0 }}
          className="absolute right-[0%] md:right-[10%] lg:right-[10%] top-[30%] md:top-[30%] lg:top-[30%] w-[320px] md:w-[390px] lg:w-[550px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/30 blur-[80px] opacity-40 z-20"
        ></motion.div>
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
              number: { value: 40, density: { enable: true, area: 600 } },
              color: { value: "#ff1100" },
              shape: { type: "triangle" },
              opacity: { value: 0.2 },
              size: { value: 6 },
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
        <div className="hidden md:block absolute inset-0 noise z-10"></div>

        {/* Header */}
        <h1 className="text-3xl font-jura text-light mb-6 text-center z-50">
          My Resume
        </h1>

        {/* JPG Resume Image */}
        <div className="w-[90%] sm:w-[70%] md:w-[50%] max-w-3xl mb-6 z-50">
          <img
            src={resume_image}
            alt="Resume preview"
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={handleDownload} // Optional: Click image to download PDF
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center z-50 mb-10  w-full max-w-[206px]">
          <Button
            onClick={handleDownload}
            aria-label="Download my resume"
            width="w-[48%] sm:w-auto"
          >
            <i className="fa-solid fa-download fa-lg mr-2"></i> Download Resume
          </Button>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Resume;
