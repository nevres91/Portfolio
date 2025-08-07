import type { Project } from "../../types/project";

export const ProjectCard: React.FC<Project> = ({
  description,
  id,
  title,
  image,
}) => {
  return (
    <div //Container
      className="flex flex-col rounded-md w-[360px] h-[436px] p-2 bg-dark/40 border border-bloody/20 shadow-lg shadow-bloody/40 relative"
      key={id}
    >
      <div //Image
        className="w-full h-[223px] min-h-[223px] max-h-[223px] rounded-t-sm overflow-hidden relative"
      >
        <img
          className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={image}
          alt="a dummy image"
        />
      </div>
      <div //Title
        className="font-jura text-xl my-2 text-light "
      >
        {title}
      </div>
      <div //Description
        className="font-jura-light text-sm text-light w-full h-[27%] line-clamp-5 overflow-hidden break-words"
      >
        {description}
      </div>
      <div //Bottom
        className="flex justify-between items-center mt-4 "
      >
        <p className="font-jura-light text-sm text-blue-400 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-50">
          Live Demo
        </p>
        <button className="py-1 px-2 bg-bloody border border-light rounded-md cursor-pointer hover:text-bloody hover:bg-light hover:border-bloody transition-all duration-100">
          Details
        </button>
      </div>
    </div>
  );
};
