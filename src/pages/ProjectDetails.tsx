import { useParams } from "react-router-dom";
import { projects } from "../components/ui/layout/sections/Projects";
import Navbar from "../components/ui/layout/Navbar";
import { skills } from "../components/ui/layout/sections/Skills";
import Marquee from "../components/Marquee";
import { ProjectCardMinimal } from "../components/ui/ProjectCardMinimal";
import { useEffect } from "react";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const usedSkills = [0, 1, 4, 6];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-400">Project Not Found</h1>
      </div>
    );
  }
  const projectColor = project.color ? project.color : "red";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative  text-white p-4 sm:p-0 z-60 overflow-hidden">
        <div //Noise overlay
          className="noise absolute top-0 left-0 h-full w-full -z-10 "
        ></div>
        <div //container
          className="flex flex-col items-start md:max-w-7xl mx-auto mt-10 sm:p-8"
        >
          <h1 className="text-2xl sm:text-4xl text-light font-jura mb-4 ">
            <span className="">Title:</span>{" "}
            <span className="text-light-red">{project.title}</span>
          </h1>
          <div //Buttons
            className="w-full flex gap-1  py-1 z-50"
          >
            <button className="border border-light/50 px-2 py-1 rounded bg-bloody hover:bg-light-red  font-jura-light transition-colors duration-100 cursor-pointer">
              <i className="fa-solid fa-desktop text-light/80"></i> Live Demo
            </button>
            <button className="border text-light/80 border-light/50 px-2 py-1 rounded  font-jura hover:bg-light hover:text-dark hover:border-bloody">
              <i className="fa-solid fa-code "></i> Code
            </button>
          </div>
          <div className="flex flex-col md:flex-row w-full lg:max-w-[90vw] relative">
            <div //Image
              className="w-full md:w-[70%] aspect-[16/9] border border-light/40 overflow-hidden z-20"
            >
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt=""
              />
            </div>
            <div //Description
              className="w-full md:w-[40%] md:min-w-[200px] mt-2 md:mt-0 md:ml-2 lg:ml-0  lg:absolute top-[50%] right-0 lg:translate-y-[-50%] lg:translate-x-[-3%] xl:translate-x-[-10%] border border-light/40 bg-black/40 md:bg-black/60  backdrop-blur-lg p-3 sm:p-5 md:max-w-[40%]  text-light font-jura-light  z-20"
            >
              <div className="lg:absolute top-[-2rem] left-[50%] lg:translate-x-[-50%]">
                <h3 className="text-lg sm:text-2xl text-light font-jura">
                  Description
                </h3>
              </div>
              <p className="">{project.description}</p>
            </div>
          </div>
          <div //Skills used
            className={`flex w-full lg:w-[70%] my-1 text-light/80 text-sm lg:text-md font-jura-light items-center z-20 py-2`}
          >
            <p className="mr-2 text-md md:text-lg">Skills used: </p>
            {usedSkills.map((index) => {
              return (
                <div className="">
                  <div className="border border-light/20  rounded bg-black/40 px-2 py-1   mr-[2px]">
                    {skills[index].title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div //Other Projects desktop
          className=" flex-col hidden sm:flex"
        >
          <h1 className="font-jura text-3xl text-light self-center">
            Other Projects
          </h1>
          <Marquee projects={projects} />
        </div>
        <div //Other projects mobile
          className="sm:hidden z-50"
        >
          <h1 className="font-jura text-xl text-light/80 self-center mt-5 mb-2">
            All Projects
          </h1>
          <div className="grid sm:hidden grid-cols-2 grid-rows-1   gap-4 z-50">
            {projects.map((project) => {
              return (
                <ProjectCardMinimal
                  id={project.id}
                  title={project.title}
                  image={project.image}
                  color={project.color}
                  key={project.key}
                />
              );
            })}
          </div>
        </div>
        <div //Blured circles
          className={` absolute left-[50%] translate-x-[-50%] w-full lg:left-[0] top-[5%] lg:top-[50%] lg:translate-y-[-50%]  md:w-[390px] lg:w-[800px] aspect-square  rounded-full bg-${projectColor}-500/30 blur-[40px] md:blur-[80px] opacity-40 md:opacity-30 z-10`}
        ></div>
        <div
          className={`absolute lg:left-[30%] left-0 top-[0%] translate-y-[100%] w-full lg:top-[50%] lg:translate-y-[-50%]  md:w-[290px] lg:w-[550px] aspect-[4/5] rounded-full bg-${
            project.color ? project.color : "red"
          }-500/30 blur-[50px] md:blur-[80px] opacity-40 md:opacity-30 z-10`}
        ></div>
        <div
          className={`absolute  left-[50%] translate-x-[-50%] lg:translate-x-0 bottom-[0%] lg:left-[60%]  w-[90%]  lg:top-[50%] lg:translate-y-[-50%]  md:w-[290px] lg:w-[550px] aspect-[4/5] rounded-full bg-${
            project.color ? project.color : "red"
          }-500/30 blur-[50px] md:blur-[80px] opacity-50 md:opacity-40 z-10`}
        ></div>
      </div>
    </>
  );
}
