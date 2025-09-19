import type { Project } from "../types/project";
import { ProjectCardMinimal } from "./ui/ProjectCardMinimal";

interface MarqueeProps {
  projects: Project[];
}

const Marquee = ({ projects }: MarqueeProps) => {
  const duplicatedProjects = Array(3).fill(projects).flat();

  return (
    <div className="w-full overflow-hidden  py-8 h-[350px] z-50">
      <div className="marquee-wrapper">
        <div className="marquee flex animate-marquee">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className={`flex-shrink-0 mx-4 w-[200px] ${
                index % 2 === 1 ? "sm:mt-8" : ""
              }`}
            >
              <ProjectCardMinimal
                id={project.id}
                title={project.title}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
