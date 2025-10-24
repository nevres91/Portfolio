import { useRef } from "react";
import useCardGlowEffect from "../../../../hooks/useCardGlowEffect";
import { ProjectCarousel } from "../../ProjectCarousel";
import { useInViewAnimation } from "../../../../hooks/useInViewAnimation";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useProjects } from "../../../../context/ProjectsContext";
import projects_icon from "/src/assets/img/projects_icon.png";

export default function Projects() {
  const { projects } = useProjects();
  useCardGlowEffect();
  const { ref: ref } = useInViewAnimation({
    amount: 0.9,
    once: false,
    opacity: 0.6,
    duration: 0.5,
  });

  // Track scroll progress for the section
  const projectsRef = useRef(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: projectsRef,
      offset: ["start end", "end center"],
    });

  // -------------------TITLE--------------------
  const projectsTitleY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -290]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const contentY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -290]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  const projectsTitleIconX: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-50, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const projectsTitleX: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [50, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const titleOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [1, 0.2],
    [2, 0]
  );
  const projectsSectionY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0.9, 1], [0, -700]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  const contentOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [1, 0],
    [0, 5]
  );

  return (
    <motion.section //Container
      style={{
        y: projectsSectionY,
        opacity: contentOpacity,
      }}
      ref={projectsRef}
      id="projects"
      className="flex flex-col mx-[10px] md:mx-[50px] lg:mx-[120px] max-w-7xl relative  w-full translate-y-[-290px]  pt-[100px]"
    >
      <motion.div //TITLE
        style={{ opacity: titleOpacity, y: projectsTitleY }}
        className="flex items-center justify-center   text-2xl md:text-3xl font-bold font-jura-light uppercase text-light translate-y-[290px]"
      >
        <motion.img
          style={{ x: projectsTitleIconX }}
          src={projects_icon}
          alt="an icon representing finished projects"
          className="w-10 md:w-12 h-10 md:h-13 "
        />{" "}
        <motion.h2 style={{ x: projectsTitleX }} className="ml-2">
          My Projects
        </motion.h2>
      </motion.div>
      <motion.div
        style={{ opacity: titleOpacity, y: contentY }}
        className="translate-y-[290px]"
      >
        <ProjectCarousel projects={projects} />
      </motion.div>
      <motion.div
        ref={ref}
        style={{ opacity: titleOpacity, y: contentY }}
        className="absolute left-[0] hidden md:block sm:left-[calc(50%-300px)] md:left-[-0%] top-[12%] md:top-[55%] w-[600px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40 -z-10"
      ></motion.div>
      <motion.div
        ref={ref}
        style={{ opacity: titleOpacity, y: contentY }}
        className="absolute right-[0] hidden lg:block lg:left-[25%] top-[20%] md:top-[55%] w-[600px] lg:w-[600px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40 -z-10"
      ></motion.div>
      <motion.div
        ref={ref}
        style={{ opacity: titleOpacity, y: contentY }}
        className="absolute right-[calc(50%-300px)] top-[55%] md:top-[55%] md:right-[-0%] w-[600px] lg:w-[600px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40 -z-10"
      ></motion.div>
    </motion.section>
  );
}
