import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

export const ProjectCardMinimal: React.FC<Project> = ({ id, title, image }) => {
  return (
    <div //CONTAINER
      key={id}
      className="container flex relative w-[100%] aspect-[4/5] sm:w-[200px] sm:h-[250px] overflow-hidden rounded-lg hover:translate-y-[-5px] duration-100 border-white/20 border sm:border-none sm:shadow-[0px_0px_21px_0px_rgba(255,255,255,0.25)] z-50"
    >
      <div //Card Content
        className={`flex flex-col justify-between card w-full h-full rounded-xl cursor-default p-3  items-center text-start 
      }`}
      >
        <div //CARD IMAGE
          className="w-full h-[123px] min-h-[123px] max-h-[40%] rounded-t-md relative border-2 border-white"
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          />
        </div>
        <div //TITLE
          className="flex z-10 items-center self-start"
        >
          <h4 className="text-light font-jura z-10 text-sm uppercase">
            {title}
          </h4>
        </div>
        <div //Bottom
          className="flex justify-between w-full items-center mt-1 z-10"
        >
          <p className="font-jura-light text-xs text-blue-400 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-50">
            Live Demo
          </p>
          <Link
            to={`/project/${id}`}
            onClick={() => window.scrollTo(0, 0)}
            className="py-[2px] px-2 bg-bloody border border-light rounded-md cursor-pointer hover:text-bloody hover:bg-light hover:border-bloody transition-all duration-100 font-jura-light text-sm"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="noise-card absolute"></div>
    </div>
  );
};
