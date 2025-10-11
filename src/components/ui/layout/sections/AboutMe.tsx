import { useRef } from "react";
import { useInViewAnimation } from "../../../../hooks/useInViewAnimation";
import Button from "../../Button";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import {
  getAboutMeSectionRange,
  getAboutMeTitleRange,
} from "../../../../utils/parallaxRanges";
import { toast } from "react-toastify";

export default function AboutMe() {
  // Track scroll progress for the section
  const aboutMeRef = useRef(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: aboutMeRef,
      offset: ["start end", "end center"],
    });
  const { ref: ref, controls: controls } = useInViewAnimation({
    amount: 0.9,
    once: false,
    opacity: 0.4,
    duration: 0.5,
  });
  const { ref: leftContent, controls: controls4 } = useInViewAnimation({
    amount: 0.2,
    once: true,
    opacity: 1,
    duration: 0.8,
  });
  const greetingX: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [200, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const nameX: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [400, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const textY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [600, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const buttonsY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [800, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  const aboutMeTitleY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], getAboutMeTitleRange()),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const aboutMeSectionY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0.8, 1.5], getAboutMeSectionRange()),
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
  const aboutMeTitleOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [1, 0.2],
    [2, 0]
  );

  const copyEmail = async () => {
    await navigator.clipboard.writeText("nevres@example.com");
    toast.success("📋 Email copied!");
  };

  return (
    <motion.section
      style={{ y: aboutMeSectionY, opacity: contentOpacity }}
      initial="initial"
      animate="animate"
      id="about"
      ref={aboutMeRef}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col mx-[10px] md:mx-[50px] lg:mx-[120px] max-w-7xl relative h-screen  justify-center z-60"
    >
      <div //ABOUT ME TITLE
        className="flex justify-center items-center h-fit"
      >
        <motion.h2
          style={{ y: aboutMeTitleY, opacity: aboutMeTitleOpacity }}
          className="text-2xl md:text-3xl font-bold font-jura-light uppercase text-light"
        >
          About{" "}
        </motion.h2>
        <motion.div
          style={{ y: aboutMeTitleY, opacity: aboutMeTitleOpacity }}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          className="ml-2 flex items-center justify-center text-3xl md:text-4xl font-jura  px-2 bg-light rounded-xl h-fit"
        >
          <span className="text-bloody mb-1">m</span>
          <span className="text-light-red mb-1 -ml-[5px]">e</span>
        </motion.div>
      </div>
      <div //CONTENT
        className="flex flex-col md:flex-row  items-center justify-between mt-5 sm:mt-10 relative"
      >
        <motion.div //LEFT
          ref={leftContent}
          animate={controls4}
          initial={{ opacity: 0, x: -100 }}
          className="flex flex-col justify-center md:w-[70%]"
        >
          <motion.h2
            style={{ y: greetingX }}
            className="text-light-red font-jura-light text-2xl"
          >
            Hello, I am
          </motion.h2>
          <motion.h2
            style={{ y: nameX }}
            className="text-light font-jura text-2xl"
          >
            Nevres Muratović
          </motion.h2>
          <motion.p
            style={{ y: textY }}
            className="font-jura-light text-xl text-light leading-[1.3] mt-3"
          >
            I am a passionate web developer with a focus on building clean,
            responsive, and user-friendly web applications. I specialize in
            front-end development using modern technologies like React,
            TypeScript, and Tailwind CSS, and I love turning ideas into
            interactive digital experiences. I'm always learning, always
            building, and always looking for the next challenge that pushes me
            to grow.
          </motion.p>
        </motion.div>
        <motion.div
          style={{ y: buttonsY }}
          className="flex w-full sm:w-[300px] justify-between mt-4 md:mt-10 md:absolute bottom-0 left-0 "
        >
          <Button width="w-[48%] sm:w-auto">Read More</Button>
          <Button width="w-[48%] sm:w-auto">Download Resume</Button>
        </motion.div>
        <motion.div //RIGHT
          ref={leftContent}
          animate={controls4}
          initial={{ opacity: 0, x: 100 }}
          className="w-full sm:max-w-[290px] self-start mt-5 md:mt-0 md:w-[270px] h-[400] flex flex-col justify-center items-center"
        >
          <motion.img
            style={{ y: nameX }}
            className="w-[220px] h-[329px] object-cover hidden md:block z-50"
            src="/src/assets/img/nevres_portrait.png"
            alt="Portrait of Nevres Muratović"
          />
          {/* <motion.p
            style={{ y: textY }}
            className="font-jura-light text-light/50  md:self-center"
          >
            nevres_muratovic@hotmail.com
          </motion.p> */}
          <motion.p
            style={{ y: textY }}
            onClick={() => copyEmail()}
            className="cursor-pointer font-jura-light text-light/50  md:self-center"
          >
            nevres_muratovic@hotmail.com
          </motion.p>

          <motion.div //SOCIAL ICONS
            style={{ y: buttonsY }}
            className="flex text-[42px] justify-between mt-4 text-light/80  gap-5 md:gap-0 md:w-[90%] "
          >
            <a
              className="flex"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/nevres.muratovic"
            >
              <i className="fa-brands fa-facebook social-icon p-2 rounded-full"></i>
            </a>
            <a
              className="flex"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nevres-muratovic-9718a4321/"
            >
              <i className="fa-brands fa-linkedin social-icon p-2 rounded-md"></i>
            </a>
            <a
              className="flex"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nevres91"
            >
              <i className="fa-brands fa-github social-icon p-2 rounded-full"></i>
            </a>
            <a
              className="flex"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/muratovicnevres/?hl=en"
            >
              <i className="fa-brands fa-instagram social-icon p-2 rounded-2xl"></i>
            </a>
          </motion.div>
        </motion.div>
        <div className="flex"></div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        className="absolute left-[-5%] lg:left-[-10%] top-[10%] lg:top-[15%]  xl:top-[22%] w-[450px] md:w-[550px] lg:w-[500px] xl:w-[600px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"
      ></motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        className="absolute hidden lg:block  left-[40%] lg:left-[38%] lg:top-[23%]  xl:left-[calc(50%-200px)] top-[15%] xl:top-[25%] w-[460px] lg:w-[400px] xl:w-[500px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"
      ></motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        className="absolute right-[0%] lg:right-[-10%] xl:right-[-2%] top-[20%] md:top-[25%] lg:top-[30%] w-[350px] lg:w-[350px] xl:w-[400px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"
      ></motion.div>
    </motion.section>
  );
}
