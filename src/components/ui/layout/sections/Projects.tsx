import { Link } from "react-router-dom";
import type { Project } from "../../../../types/project";
import { ProjectCard } from "../../ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    title: "Project 1",
    description: "A cool project",
    image: "/src/assets/img/dummy_image.jpg",
  },
  {
    id: "2",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque non vel suscipit eaque. Nam maxime sunt doloremque sit voluptates quasi iste minus distinctio reprehenderit dolores natus minima omnis repudiandae excepturi eum illum est recusandae necessitatibus corporis sed accusamus, ea aspernatur eius. Nesciunt enim ut, dolor molestiae libero impedit? Similique natus laboriosam pariatur et aliquam vitae voluptatum illo voluptatem.",
    image: "/src/assets/img/dummy_image.jpg",
  },
  {
    id: "3",
    title: "Project 3",
    description: "Another cool project",
    image: "/src/assets/img/dummy_image.jpg",
  },
  {
    id: "4",
    title: "Project 4",
    description: "Another cool project",
    image: "/src/assets/img/dummy_image.jpg",
  },
  {
    id: "5",
    title: "Project 5",
    description: "Another cool project",
    image: "/src/assets/img/dummy_image.jpg",
  },
  {
    id: "6",
    title: "Project 6",
    description: "Another cool project",
    image: "/src/assets/img/dummy_image.jpg",
  },
  {
    id: "7",
    title: "Project 7",
    description: "Another cool project",
    image: "/src/assets/img/dummy_image.jpg",
  },
];

export default function Projects() {
  return (
    <section //Container
      id="projects"
      className="flex flex-col mx-[10px] md:mx-[50px] lg:mx-[120px] max-w-7xl relative w-full items-center mt-20"
    >
      <div //TITLE
        className="flex items-center justify-center mb-10 text-2xl md:text-3xl font-bold font-jura-light uppercase text-light"
      >
        <img
          src="/src/assets/img/projects_icon.png"
          alt="an icon representing finished projects"
          className="w-10 md:w-12 h-10 md:h-13 mb-3"
        />{" "}
        <h2 className="ml-2">My Projects</h2>
      </div>
      <div>
        <div //CONTENT
          className="flex flex-wrap items-center justify-center gap-10"
        >
          {projects.map((project) => (
            <ProjectCard
              description={project.description}
              id={project.id}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
