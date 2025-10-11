import { useParams } from "react-router-dom";
import Navbar from "../components/ui/layout/Navbar";
import { skills } from "../components/ui/layout/sections/Skills";
import Marquee from "../components/Marquee";
import { ProjectCardMinimal } from "../components/ui/ProjectCardMinimal";
import { useEffect } from "react";
import { useProjects } from "../context/ProjectsContext";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function ProjectDetails() {
  const { projects } = useProjects();
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-400">Project Not Found</h1>
      </div>
    );
  }

  const projectColor = project.color ? project.color : "red";
  console.log(projectColor);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: title, controls: titleControls } = useInViewAnimation({
    amount: 0.2,
    once: true,
    opacity: 1,
    duration: 0.5,
  });
  const { ref: liveBUtton, controls: liveButtonControls } = useInViewAnimation({
    amount: 0.2,
    once: true,
    opacity: 1,
    duration: 1,
    delay: 0.3,
  });
  const { ref: codeButton, controls: codeButtonControls } = useInViewAnimation({
    amount: 0.2,
    once: true,
    opacity: 1,
    duration: 1,
    delay: 0.3,
  });
  const { ref: image, controls: imageControls } = useInViewAnimation({
    amount: 0.2,
    once: true,
    opacity: 1,
    duration: 1,
    delay: 0.4,
  });
  const { ref: description, controls: descriptionControls } =
    useInViewAnimation({
      amount: 0.2,
      once: true,
      opacity: 1,
      duration: 1,
      delay: 1,
    });
  const { ref: usedSkills, controls: usedSkillsControls } = useInViewAnimation({
    amount: 0.2,
    once: true,
    opacity: 1,
    duration: 1,
    delay: 0.5,
  });
  const { ref: otherProjects, controls: otherProjectsControls } =
    useInViewAnimation({
      amount: 0.1,
      once: true,
      opacity: 1,
      duration: 1,
      delay: 1,
    });
  const { ref: otherProjectsMobile, controls: otherProjectsMobileControls } =
    useInViewAnimation({
      amount: 0,
      once: true,
      opacity: 1,
      duration: 1,
      delay: 1,
    });

  return (
    <>
      <Navbar animate={false} />
      <div className="min-h-screen bg-black relative  text-white p-4 sm:p-0 z-60 overflow-hidden">
        <div //Noise overlay
          className="noise absolute top-0 left-0 h-full w-full -z-10 "
        ></div>
        <div //container
          className="flex flex-col items-start md:max-w-7xl mx-auto mt-10 sm:p-8 "
        >
          <motion.h1
            ref={title}
            animate={titleControls}
            initial={{ opacity: 0, scale: 0 }}
            className="text-2xl sm:text-4xl text-light font-jura mb-4"
          >
            <span className="">Title:</span>{" "}
            <span className="text-light-red">{project.title}</span>
          </motion.h1>
          <div //Buttons
            className="w-full flex gap-1  py-1 z-50"
          >
            <motion.a
              ref={liveBUtton}
              animate={liveButtonControls}
              initial={{ opacity: 0, x: -50 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-light/50 px-2 py-1 rounded bg-bloody hover:bg-light-red  font-jura-light transition-colors duration-100 cursor-pointer"
            >
              <i className="fa-solid fa-desktop text-light/80"></i> Live Demo
            </motion.a>
            <motion.a
              ref={codeButton}
              animate={codeButtonControls}
              initial={{ opacity: 0, x: 50 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border text-light/80 border-light/50 px-2 py-1 rounded  font-jura hover:bg-light hover:text-dark hover:border-bloody"
            >
              <i className="fa-solid fa-code "></i> Code
            </motion.a>
          </div>
          <div className="flex flex-col md:flex-row w-full lg:max-w-[90vw] relative">
            <motion.div //Image
              ref={image}
              animate={imageControls}
              initial={{ opacity: 0, scale: 0.8 }}
              className="w-full md:w-[70%] aspect-[16/9] border border-light/40 overflow-hidden z-20"
            >
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt=""
              />
            </motion.div>
            <motion.div //Description
              ref={description}
              animate={descriptionControls}
              initial={{ opacity: 0, x: 150 }}
              className=" w-full md:w-[40%] md:min-w-[200px] mt-2 md:mt-0 md:ml-2 lg:ml-0  lg:absolute top-[50%] right-0 lg:translate-y-[-50%] lg:translate-x-[-3%] xl:translate-x-[-10%] border border-light/40 bg-black/40 md:bg-black/60  backdrop-blur-lg p-3 sm:p-5 md:max-w-[40%]  text-light font-jura-light  z-20"
            >
              <div className="lg:absolute top-[-2rem] left-[50%] lg:translate-x-[-50%]">
                <h3 className="text-lg sm:text-2xl text-light font-jura">
                  Description
                </h3>
              </div>
              <p className="">{project.description}</p>
            </motion.div>
          </div>
          <motion.div //Skills used
            ref={usedSkills}
            animate={usedSkillsControls}
            initial={{ opacity: 0, y: -50 }}
            className={`flex flex-col w-full lg:w-[70%] my-1 text-light/80 text-sm lg:text-md font-jura-light z-20 py-2`}
          >
            <p className="mr-2 text-md md:text-lg">Skills used: </p>
            <div //skills container
              className="flex flex-wrap gap-1 mt-1"
            >
              {project.used_skills
                ? project.used_skills.map((index) => {
                    return (
                      <div className="">
                        <div className="border border-light/20  rounded bg-black/40 px-2 py-1   mr-[2px]">
                          {skills[index].title}
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </motion.div>
        </div>
        <motion.div //Other Projects desktop
          ref={otherProjects}
          animate={otherProjectsControls}
          initial={{ opacity: 0, y: -50 }}
          className=" flex-col hidden sm:flex"
        >
          <h1 className="font-jura text-3xl text-light self-center">
            Other Projects
          </h1>
          <Marquee projects={projects} />
        </motion.div>
        <motion.div //Other projects mobile
          ref={otherProjectsMobile}
          animate={otherProjectsMobileControls}
          initial={{ opacity: 0, y: 50 }}
          className="sm:hidden z-50"
        >
          <h1 className="font-jura text-xl text-light/80 self-center mt-5 mb-2">
            All Projects
          </h1>
          <div className="grid sm:hidden grid-cols-2 grid-rows-1    gap-0 md:gap-4 z-50">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-[1px] py-2 flex items-center justify-center"
                style={{ minWidth: `170px`, maxWidth: "250px" }}
              >
                <ProjectCardMinimal
                  description={project.description}
                  id={project.id}
                  title={project.title}
                  image={project.image}
                  liveUrl={project.liveUrl}
                />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div //Blured circles
          style={{ backgroundColor: `${project.color}` }}
          className={` absolute left-[50%]  w-full lg:left-[0] top-[5%] lg:top-[5%]  md:w-[390px] lg:w-[700px] aspect-square  rounded-full  blur-[40px] md:blur-[80px] opacity-40 md:opacity-20 z-10`}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.1, 0.6, 1],
            opacity: [0.1, 0.3, 0.3, 0.1],
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        ></motion.div>
        <motion.div
          style={{ backgroundColor: `${project.color}` }}
          className={`absolute lg:left-[30%] left-0 top-[0%]  w-full lg:top-[20%]  md:w-[290px] lg:w-[550px] aspect-square rounded-full  blur-[50px] md:blur-[80px] opacity-40 md:opacity-20 z-10`}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.4, 0.7, 1],
            opacity: [0.1, 0.3, 0.3, 0.1],
          }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        ></motion.div>
        <motion.div
          style={{ backgroundColor: `${project.color}` }}
          className={`absolute  left-[50%] lg:left-[60%]  w-[90%]  lg:top-[15%]  md:w-[290px] lg:w-[550px] aspect-square rounded-full  blur-[50px] md:blur-[80px] opacity-50 md:opacity-20 z-10`}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -90, 90, 0],
            scale: [1, 1.5, 0.7, 1],
            opacity: [0.1, 0.3, 0.3, 0.1],
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        ></motion.div>
      </div>
    </>
  );
}
