import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import ScrollAnimationIcon from "../../../../assets/fonts/ScrollAnimationIcon";
import { scrollToElement } from "../../../../utils/scroll";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useRef } from "react";

export default function Home() {
  // Animation variants using Framer Motion's Variants type

  const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const fadeInFromTop: Variants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const fadeInFromBottom: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  // Detect screen size breakpoints (Tailwind: sm=640px, md=768px, lg=1024px)
  const isSm: boolean = useMediaQuery("(min-width: 640px)");
  const isMd: boolean = useMediaQuery("(min-width: 768px)");
  const isLg: boolean = useMediaQuery("(min-width: 1024px)");

  // Determine y movement based on screen size
  const portfolioYRange: [number, number] = isLg
    ? [0, 500]
    : isMd
    ? [0, 400]
    : isSm
    ? [0, 300]
    : [0, 500];
  const WelcomeRange: [number, number] = isLg
    ? [0, 100]
    : isMd
    ? [0, 120]
    : isSm
    ? [0, 160]
    : [0, 130];
  const websiteYRange: [number, number] = isLg
    ? [0, -250]
    : isMd
    ? [0, -100]
    : isSm
    ? [0, -30]
    : [0, -30];

  // Track scroll progress for the section
  const sectionRef = useRef(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: sectionRef,
      offset: ["start start", "end start"],
    });

  // Parallax transformations
  const portfolioY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 1], portfolioYRange),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const welcomeY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 1], WelcomeRange),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const portfolioOpacity: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [1, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const websiteY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 1], websiteYRange),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const websiteOpacity: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [1, 0.8]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  // Contact button opacity with smoother fade
  const contactOpacity: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    {
      stiffness: 120,
      damping: 30,
    }
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen relative text-light flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center relative max-w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, ease: "easeOut", delay: 0 }}
          className="absolute left-[-25%] md:left-[-10%] lg:left-[-15%] w-[300px] md:w-[390px] lg:w-[550px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40 z-20"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, ease: "easeOut", delay: 0 }}
          className="absolute left-[43%] md:left-[42%] lg:left-[45%] w-[220px] md:w-[290px] lg:w-[350px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40 z-20"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, ease: "easeOut", delay: 0 }}
          className="absolute right-[-20%] md:right-[-6%] lg:right-[-10%] w-[120px] md:w-[190px] lg:w-[250px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-40 z-20"
        ></motion.div>
        <motion.h1
          style={{ y: welcomeY }}
          variants={fadeInFromTop}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="text-lg md:text-2xl lg:text-4xl tracking-[12px] uppercase font-anta mb-3 bg-gradient-to-r from-[#610202] via-[#E00404] to-[#610202] bg-clip-text text-transparent"
        >
          Welcome to
        </motion.h1>
        <motion.h1
          style={{ y: welcomeY }}
          variants={fadeInFromTop}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          className="text-lg md:text-2xl lg:text-4xl uppercase font-anta tracking-[12px] mb-5 bg-gradient-to-r from-[#610202] via-[#E00404] to-[#610202] bg-clip-text text-transparent"
        >
          My
        </motion.h1>
        <motion.h1
          style={{ y: portfolioY, opacity: portfolioOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, ease: "easeOut", delay: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-allerta tracking-[10px] sm:tracking-[25px] md:tracking-[40px] ml-[2.5%] md:ml-[4%] text-light"
        >
          PORTFOLIO
        </motion.h1>
        <motion.h1
          variants={fadeInFromBottom}
          style={{ y: websiteY, opacity: websiteOpacity }}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          className="text-xs md:text-sm lg:text-lg tracking-[8px] uppercase font-anta mt-3 mb-[10%] bg-gradient-to-r from-[#610202] via-[#E00404] to-[#610202] bg-clip-text text-transparent"
        >
          Website
        </motion.h1>
      </div>
      <motion.a
        variants={fadeIn}
        initial="initial"
        animate="animate"
        style={{ opacity: contactOpacity }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
        href="#contact"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          scrollToElement("contact");
        }}
        className="uppercase tracking-[8px] text-light font-jura text-md hover:bg-light p-3 rounded-2xl hover:text-dark hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.5)] transition-all ease-in-out duration-150 cursor-pointer"
      >
        Contact Me
      </motion.a>
      <ScrollAnimationIcon threshold={400} />
    </section>
  );
}
