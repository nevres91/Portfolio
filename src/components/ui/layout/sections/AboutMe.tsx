import { useInViewAnimation } from "../../../../hooks/useInViewAnimation";
import Button from "../../Button";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { ref: ref1, controls: controls1 } = useInViewAnimation();
  const { ref: ref2, controls: controls2 } = useInViewAnimation();
  const { ref: ref3, controls: controls3 } = useInViewAnimation();
  return (
    <section
      id="about"
      className="flex flex-col mx-[10px] md:mx-[50px] lg:mx-[120px] max-w-7xl relative"
    >
      <div //ABOUT ME TITLE
        className="flex justify-center items-center h-fit"
      >
        <motion.h2
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="text-2xl md:text-3xl font-bold font-jura-light uppercase text-light"
        >
          About{" "}
        </motion.h2>
        <div className="ml-2 flex items-center justify-center text-3xl md:text-4xl font-jura  px-2 bg-light rounded-xl h-fit">
          <span className="text-bloody mb-1">m</span>
          <span className="text-light-red mb-1 -ml-[5px]">e</span>
        </div>
      </div>
      <div //CONTENT
        className="flex flex-col md:flex-row items-center justify-between mt-5 sm:mt-10 relative"
      >
        <div //LEFT
          className="flex flex-col justify-center md:w-[70%]  "
        >
          <h2 className="text-light-red font-jura-light text-2xl">
            Hello, I am
          </h2>
          <h2 className="text-light font-jura text-2xl">Nevres Muratović</h2>
          <p className="font-jura-light text-xl text-light leading-[1.3] mt-3">
            I am a passionate web developer with a focus on building clean,
            responsive, and user-friendly web applications. I specialize in
            front-end development using modern technologies like React,
            TypeScript, and Tailwind CSS, and I love turning ideas into
            interactive digital experiences. I'm always learning, always
            building, and always looking for the next challenge that pushes me
            to grow.
          </p>
          <div className="flex w-full sm:w-[300px] justify-between mt-4 md:mt-10 md:absolute bottom-0 left-0 ">
            <Button width="w-[48%] sm:w-auto">Read More</Button>
            <Button width="w-[48%] sm:w-auto">Download Resume</Button>
          </div>
        </div>
        <div //RIGHT
          className="w-full sm:max-w-[290px] self-start mt-5 md:mt-0 md:w-[270px] h-[400] flex flex-col justify-center items-center"
        >
          <img
            className="w-[220px] h-[329px] object-cover hidden md:block z-50"
            src="/src/assets/img/nevres_portrait.png"
            alt="Portrait of Nevres Muratović"
          />
          <p className="font-jura-light text-light/50  md:self-center">
            nevres_muratovic@hotmail.com
          </p>
          <div //SOCIAL ICONS
            className="flex text-[42px] justify-between mt-4 text-light/80  gap-5 md:gap-0 md:w-[90%] "
          >
            <i className="fa-brands fa-facebook social-icon p-2 rounded-full"></i>
            <i className="fa-brands fa-linkedin social-icon p-2 rounded-md"></i>
            <i className="fa-brands fa-github social-icon p-2 rounded-full"></i>
            <i className="fa-brands fa-instagram social-icon p-2 rounded-2xl"></i>
          </div>
        </div>
        <div className="flex"></div>
      </div>
      <motion.div
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, x: -50 }}
        className="absolute left-[-5%] lg:left-[-10%] top-[10%] lg:top-[15%]  xl:top-[8%] w-[450px] md:w-[550px] lg:w-[500px] xl:w-[600px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"
      ></motion.div>
      <motion.div
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0 }}
        className="absolute hidden lg:block  left-[40%] lg:left-[38%] lg:top-[23%]  xl:left-[calc(50%-200px)] top-[15%] xl:top-[15%] w-[460px] lg:w-[400px] xl:w-[500px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"
      ></motion.div>
      <motion.div
        ref={ref3}
        animate={controls3}
        initial={{ opacity: 0 }}
        className="absolute right-[0%] lg:right-[-10%] xl:right-[-2%] top-[20%] md:top-[25%] lg:top-[30%] w-[350px] lg:w-[350px] xl:w-[400px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"
      ></motion.div>
    </section>
  );
}
