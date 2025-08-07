import { SkillCard } from "../../SkillCard";

export const Skills = () => {
  const skills = [
    {
      title: "HTML",
      url: "/src/assets/img/HTML.png",
      alt: "An icon of HTML logo",
    },
    {
      title: "CSS",
      url: "/src/assets/img/Css.png",
      alt: "An icon of CSS logo",
    },
    {
      title: "Tailwind CSS",
      url: "/src/assets/img/Tailwind.png",
      alt: "An icon of Tailwind CSS logo",
    },
    {
      title: "Material UI",
      url: "/src/assets/img/MUI.png",
      alt: "An icon of Material UI logo",
    },
    {
      title: "Javascrypt",
      url: "/src/assets/img/JS.png",
      alt: "An icon of Javascrypt logo",
    },
    {
      title: "Typescrypt",
      url: "/src/assets/img/Typescript.png",
      alt: "An icon of Typescript logo",
    },
    {
      title: "React",
      url: "/src/assets/img/react.png",
      alt: "An icon of React logo",
    },
    {
      title: "Vite",
      url: "/src/assets/img/Vite.png",
      alt: "An icon of Vite logo",
    },
    {
      title: "Firebase",
      url: "/src/assets/img/Firebase.png",
      alt: "An icon of Firebase logo",
    },
    {
      title: "Figma",
      url: "/src/assets/img/FIGMA.png",
      alt: "An icon of Figma logo",
    },
    {
      title: "Cinema4D",
      url: "/src/assets/img/Cinema4D.png",
      alt: "An icon of Cinema4D logo",
    },
    {
      title: "Photoshop",
      url: "/src/assets/img/Photoshop.png",
      alt: "An icon of Photoshop logo",
    },
  ];
  return (
    <section
      id="about"
      className="flex flex-col max-w-7xl relative items-center mt-20 w-full"
    >
      <div //TITLE
        className="flex items-center justify-center mb-10 text-2xl md:text-3xl font-bold font-jura-light uppercase text-light"
      >
        <img
          src="/src/assets/img/skills.png"
          alt=""
          className="w-10 md:w-15 h-10 md:h-15 mb-3"
        />
        <h1 className="ml-2">Skills</h1>
      </div>
      <div //CONTENT
        className="z-50 w-full md:w-auto flex flex-row flex-wrap items-center justify-center sm:grid grid-cols-4  sm:grid-cols-4 md:grid-cols-6 grid-rows-4 sm:grid-rows-4 md:grid-rows-2 gap-2 sm:gap-5 md:gap-2 lg:gap-8 xl:gap-12 mx-[10px] md:mx-[50px] lg:mx-[120px]"
      >
        {skills.map((skill) => {
          return (
            <SkillCard url={skill.url} alt={skill.alt} title={skill.title} />
          );
        })}
      </div>
      <div className="z-10 absolute left-[-50%] lg:left-[-20%] lg:top-[-9%]  xl:top-[-18%] w-[600px] xl:w-[700px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-30"></div>
      <div className="z-10 absolute left-[40%] lg:left-[80%] lg:top-[10%]  xl:left-[calc(50%-260px)] top-[15%] xl:top-[-8%] w-[400px] xl:w-[600px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-30"></div>
      <div className="z-10 absolute hidden lg:block lg:right-[12%] xl:right-[-10%] top-[1%] w-[500px] aspect-square  rounded-full bg-red-500/30 blur-[80px] opacity-30"></div>
    </section>
  );
};
