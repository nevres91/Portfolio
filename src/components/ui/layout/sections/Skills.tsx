import { useRef } from "react";
import { SkillCard } from "../../SkillCard";
import { useInViewAnimation } from "../../../../hooks/useInViewAnimation";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

export const skills = [
  {
    index: 0,
    title: "HTML",
    url: "/src/assets/img/HTML.png",
    alt: "An icon of HTML logo",
    offsetLg: 700,
    offsetMd: 600,
    offsetSm: 300,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    index: 1,
    title: "CSS",
    url: "/src/assets/img/Css.png",
    alt: "An icon of CSS logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 300,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    index: 2,
    title: "Tailwind CSS",
    url: "/src/assets/img/Tailwind.png",
    alt: "An icon of Tailwind CSS logo",
    offsetLg: 400,
    offsetMd: 300,
    offsetSm: 400,
    link: "https://tailwindcss.com/",
  },
  {
    index: 3,
    title: "Material UI",
    url: "/src/assets/img/MUI.png",
    alt: "An icon of Material UI logo",
    offsetLg: 400,
    offsetMd: 300,
    offsetSm: 400,
    link: "https://mui.com/",
  },
  {
    index: 4,
    title: "Javascript",
    url: "/src/assets/img/JS.png",
    alt: "An icon of Javascrypt logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 500,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    index: 5,
    title: "Typescript",
    url: "/src/assets/img/Typescript.png",
    alt: "An icon of Typescript logo",
    offsetLg: 700,
    offsetMd: 600,
    offsetSm: 500,
    link: "https://www.typescriptlang.org/",
  },
  {
    index: 6,
    title: "React",
    url: "/src/assets/img/react.png",
    alt: "An icon of React logo",
    offset: 1000,
    offsetMd: 900,
    offsetSm: 600,
    link: "https://react.dev/",
  },
  {
    index: 7,
    title: "Vite",
    url: "/src/assets/img/Vite.png",
    alt: "An icon of Vite logo",
    offsetLg: 800,
    offsetMd: 700,
    offsetSm: 600,
    link: "https://vitejs.dev/",
  },
  {
    index: 8,
    title: "Firebase",
    url: "/src/assets/img/Firebase.png",
    alt: "An icon of Firebase logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 700,
    link: "https://firebase.google.com/",
  },
  {
    index: 9,
    title: "Figma",
    url: "/src/assets/img/FIGMA.png",
    alt: "An icon of Figma logo",
    offsetLg: 600,
    offsetMd: 500,
    offsetSm: 700,
    link: "https://www.figma.com/",
  },
  {
    index: 10,
    title: "Cinema4D",
    url: "/src/assets/img/Cinema4D.png",
    alt: "An icon of Cinema4D logo",
    offsetLg: 800,
    offsetMd: 700,
    offsetSm: 800,
    link: "https://www.maxon.net/en/cinema-4d",
  },
  {
    index: 11,
    title: "Photoshop",
    url: "/src/assets/img/Photoshop.png",
    alt: "An icon of Photoshop logo",
    offsetLg: 1000,
    offsetMd: 900,
    offsetSm: 800,
    link: "https://www.adobe.com/products/photoshop.html",
  },
];

export const Skills = () => {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");

  // Determine which offset to use based on screen size
  const getOffset = (skill: any) => {
    if (isLg) return skill.offsetLg || skill.offsetMd || skill.offsetSm || 0;
    if (isMd) return skill.offsetMd || skill.offsetSm || 0;
    if (isSm) return skill.offsetSm || 0;
    return skill.offsetSm || 0; // Default to small screen offset
  };

  // Track scroll progress for the section
  const skillsRef = useRef(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: skillsRef,
      offset: ["start end", "end center"],
    });

  // -------------------TITLE--------------------
  const skillsTitleY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -190]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const skillsTitleIconX: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-50, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const skillsTitleX: MotionValue<number> = useSpring(
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
  // -------------------Skills section--------------------
  const skillsSectionY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0.8, 1.5], [0, -700]),
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
  const contentY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 1], [-350, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  // Use separate hook instances for each circle
  const { ref: ref, controls: controls } = useInViewAnimation({
    amount: 0.5,
    once: false,
    opacity: 0.4,
    duration: 0.5,
  });

  return (
    <motion.section
      style={{ y: skillsSectionY, opacity: contentOpacity }}
      ref={skillsRef}
      id="skills"
      className="flex flex-col max-w-7xl relative items-center w-full   justify-center z-50 "
    >
      <motion.div // TITLE
        style={{ opacity: titleOpacity, y: skillsTitleY }}
        className="flex items-center justify-center mb-5 sm:mb-10 text-2xl md:text-3xl font-bold font-jura-light uppercase text-light"
      >
        <motion.img
          style={{ x: skillsTitleIconX }}
          src="/src/assets/img/skills.png"
          alt="Skills icon"
          className="w-10 md:w-15 h-10 md:h-15 mb-3"
        />
        <motion.h1 style={{ x: skillsTitleX }} className="ml-2">
          Skills
        </motion.h1>
      </motion.div>
      <motion.div // CONTENT
        style={{ y: contentY, opacity: titleOpacity }}
        className="z-50 w-full md:w-auto flex flex-row flex-wrap items-center justify-center sm:grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 grid-rows-4 sm:grid-rows-4 md:grid-rows-2 gap-2 sm:gap-5 md:gap-2 lg:gap-8 xl:gap-12 mx-[10px] md:mx-[50px] lg:mx-[120px]"
      >
        {skills.map((skill, index) => {
          const offset = getOffset(skill);
          const outputRange = [
            offset || -500 + index * 100, // Custom offset or index-based
            0,
          ];
          const skillY = useSpring(
            useTransform(scrollYProgress, [0, 0.5], outputRange),
            {
              stiffness: 150,
              damping: 30,
            }
          );

          return (
            <motion.div
              key={skill.title}
              style={{ y: skillY }} // Apply the spring animation to y position
              className="w-[48%] sm:w-full h-fit sm:h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Optional stagger
            >
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full h-fit sm:w-[120px] sm:h-[120px]"
              >
                <SkillCard
                  url={skill.url}
                  alt={skill.alt}
                  title={skill.title}
                  key={skill.title}
                />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        className="z-10 absolute left-[calc(50% - 250px)] sm:left-[0] md:left-10 lg:left-[0%]  top-15 sm:top-[-10%] md:top-[-20%]  lg:top-[-30%] xl:top-[-60%] w-[500px] sm:w-[400px] lg:w-[500px] xl:w-[700px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40"
      ></motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        className="z-10 hidden md:block  absolute left-[39%] md:left-[30%] lg:left-[44%] xl:left-[calc(50%-140px)] top-[-13%] lg:top-[-15%]   xl:top-[-50%] w-[350px] xl:w-[600px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40"
      ></motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        className="z-10 absolute right-[calc(50%-200px)] sm:right-[0] md:right-[5%] lg:right-[4%] xl:right-[-5%] top-[-25%] sm:top-[-10%] md:top-[-0%] lg:top-[-8%] xl:top-[-25%]  w-[400px]  md:w-[300px] xl:w-[400px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40"
      ></motion.div>
    </motion.section>
  );
};
