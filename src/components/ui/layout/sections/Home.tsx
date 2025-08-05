import ScrollAnimationIcon from "../../../../assets/fonts/ScrollAnimationIcon";
import { scrollToElement } from "../../../../utils/scroll";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen relative text-light flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center  relative max-w-full">
        <div className="absolute left-[-25%] md:left-[-10%] lg:left-[-15%] w-[300px] md:w-[390px] lg:w-[550px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-30 z-20"></div>
        <div className="absolute left-[43%] md:left-[42%] lg:left-[45%] w-[220px] md:w-[290px] lg:w-[350px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-30 z-20"></div>
        <div className="absolute right-[-20%] md:right-[-6%] lg:right-[-10%] w-[120px] md:w-[190px] lg:w-[250px] aspect-square rounded-full bg-red-500/30 blur-[80px] opacity-30 z-20"></div>
        <h1 className="text-lg md:text-2xl lg:text-4xl tracking-[12px] uppercase font-anta mb-3 bg-gradient-to-r from-[#610202] via-[#E00404] to-[#610202] bg-clip-text text-transparent">
          Welcome to
        </h1>
        <h1 className="text-lg md:text-2xl lg:text-4xl uppercase font-anta tracking-[12px] mb-5 bg-gradient-to-r from-[#610202] via-[#E00404] to-[#610202] bg-clip-text text-transparent">
          My
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-allerta tracking-[10px]  sm:tracking-[25px] md:tracking-[40px] ml-[2.5%] md:ml-[4%] text-light">
          PORTFOLIO
        </h1>
        <h1 className="text-xs md:text-sm lg:text-lg tracking-[8px] uppercase font-anta mt-3 mb-[10%] bg-gradient-to-r from-[#610202] via-[#E00404] to-[#610202] bg-clip-text text-transparent">
          Website
        </h1>
      </div>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToElement("contact");
        }}
        className="uppercase tracking-[8px] text-light font-jura text-md hover:bg-light p-3 rounded-2xl hover:text-dark hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.5)] transition-all ease-in-out duration-150 cursor-pointer"
      >
        Contact Me
      </a>
      <ScrollAnimationIcon threshold={400} />
    </section>
  );
}
