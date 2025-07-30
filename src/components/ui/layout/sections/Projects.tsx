import { Link } from "react-router-dom";
import type { Project } from "../../../../types/project";

const projects: Project[] = [
  { id: "1", title: "Project 1", description: "A cool project" },
  { id: "2", title: "Project 2", description: "Another cool project" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent text-white flex items-center justify-center"
    >
      <div>
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
