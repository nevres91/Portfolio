import Button from "../../Button";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col mx-[10px] md:mx-[50px] lg:mx-[120px] max-w-7xl relative"
    >
      <div //ABOUT ME TITLE
        className="flex justify-center items-center h-fit"
      >
        <h2 className="text-2xl md:text-3xl font-bold font-jura-light uppercase text-light">
          About{" "}
        </h2>
        <div className="ml-2 flex items-center justify-center text-3xl md:text-4xl font-jura  px-2 bg-light rounded-xl h-fit">
          <span className="text-bloody mb-1">m</span>
          <span className="text-light-red mb-1 -ml-[5px]">e</span>
        </div>
      </div>
      <div //CONTENT
        className="flex flex-col md:flex-row items-center justify-between mt-10 relative"
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
          <div className="flex w-[300px] justify-between mt-4 md:mt-10 md:absolute bottom-0 left-0">
            <Button>Read More</Button>
            <Button>Download Resume</Button>
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
          <p className="font-jura-light text-light/50 self-start md:self-center">
            nevres_muratovic@hotmail.com
          </p>
          <div //SOCIAL ICONS
            className="flex text-[42px] justify-between mt-4 text-light/80 w-[90%] "
          >
            <i className="fa-brands fa-facebook social-icon p-2 rounded-full"></i>
            <i className="fa-brands fa-linkedin social-icon p-2 rounded-md"></i>
            <i className="fa-brands fa-github social-icon p-2 rounded-full"></i>
            <i className="fa-brands fa-instagram social-icon p-2 rounded-2xl"></i>
          </div>
        </div>
        <div className="flex"></div>
      </div>
      <div className="absolute left-[-50%] lg:left-[-20%] lg:top-[-9%]  xl:top-[-18%] w-[600px] xl:w-[700px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"></div>
      <div className="absolute left-[40%] lg:left-[80%] lg:top-[10%]  xl:left-[calc(50%-260px)] top-[15%] xl:top-[-8%] w-[400px] xl:w-[600px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"></div>
      <div className="absolute hidden lg:block lg:right-[12%] xl:right-[-10%] top-[1%] w-[500px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-35 -z-10"></div>
    </section>
  );
}
