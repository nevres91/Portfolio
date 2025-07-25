import { useParams } from "react-router-dom";
import type { Project } from "../types/project";

const projects: Project[] = [
  { id: "1", title: "Project 1", description: "A cool project" },
  { id: "2", title: "Project 2", description: "Another cool project" },
];

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-400">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
