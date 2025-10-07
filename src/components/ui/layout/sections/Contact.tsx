import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  // Track scroll progress for the section
  const contactRef = useRef(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: contactRef,
      offset: ["end start", "start end"],
    });

  // -------------------TITLE--------------------
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
  const titleY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, -300]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  const titleOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [0, 1]
  );

  // Section animation: Slide from above and fade in
  const contactSectionY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 1], [-700, -200]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  const contentOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [1, 0.7],
    [0, 1]
  );

  return (
    <motion.section
      style={{
        y: contactSectionY,
        opacity: contentOpacity,
      }}
      ref={contactRef}
      id="contact"
      className="flex flex-col max-w-7xl relative w-full items-center h-screen justify-center"
    >
      <motion.div // TITLE
        style={{ opacity: titleOpacity, y: titleY }}
        className="flex items-center justify-center text-2xl md:text-3xl font-bold font-jura-light uppercase text-light translate-y-[290px]"
      >
        <motion.img
          style={{ x: projectsTitleIconX }}
          src="/src/assets/img/contact_icon.png"
          alt="an icon representing finished projects"
          className="w-10 md:w-12 h-10 md:h-13"
        />
        <motion.h2 style={{ x: projectsTitleX }} className="ml-2">
          Contact Me
        </motion.h2>
      </motion.div>
      <div // Body
        className="flex flex-col mt-10 sm:flex-row w-[95%] lg:w-[80%] h-[70%] font-jura-light text-light bg-bloody rounded-xl p-5"
      >
        <div // LEFT SIDE
          className="flex flex-col justify-center items-center"
        >
          <div className="flex sm:flex-col text-md items-center p-1 sm:p-4 m-2 w-full sm:w-auto">
            <i className="fa-solid fa-location-dot fa-xl sm:mb-3 mr-2 sm:mr-0"></i>
            <h2 className="font-jura mr-2 sm:mr-0">Address</h2>
            <p className="text-light/65 text-sm">Bašigovci bb</p>
            <p className="text-light/65 text-sm">Živinice 75270</p>
          </div>
          <div className="flex sm:flex-col text-md items-center p-1 sm:p-4 m-2 w-full sm:w-auto">
            <i className="fa-solid fa-phone fa-xl sm:mb-3 mr-2 sm:mr-0"></i>
            <h2 className="font-jura mr-2 sm:mr-0">Phone</h2>
            <p className="text-light/65 text-sm">+38761648575</p>
          </div>
          <div className="flex sm:flex-col text-md items-center p-1 sm:p-4 m-2 w-full sm:w-auto">
            <i className="fa-solid fa-envelope fa-xl sm:mb-3 mr-2 sm:mr-0"></i>
            <h2 className="font-jura mr-2 sm:mr-0">Email</h2>
            <p className="text-light/65 text-sm">
              nevres_muratovic@hotmail.com
            </p>
          </div>
        </div>
        <div // RIGHT SIDE
          className="flex flex-col font-jura-light text-sm text-light w-full border-t sm:border-t-0 sm:border-l border-light mt-4 pt-4 sm:pl-5"
        >
          <h1 className="text-lg">Send me a message</h1>
          <input
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <textarea
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full h-full min-h-[100px]"
            name="message"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
      </div>
      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute left-[0] hidden md:block sm:left-[calc(50%-300px)] md:left-[-0%] top-[12%] md:top-[15%] w-[600px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/35 blur-[80px] opacity-40 -z-10"
      ></motion.div>
      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute right-[0] hidden lg:block lg:left-[25%] top-[20%] md:top-[15%] w-[600px] lg:w-[600px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/35 blur-[80px] opacity-40 -z-10"
      ></motion.div>
      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute right-[calc(50%-300px)] top-[15%] md:top-[15%] md:right-[-0%] w-[600px] lg:w-[600px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/35 blur-[80px] opacity-40 -z-10"
      ></motion.div>
    </motion.section>
  );
}
