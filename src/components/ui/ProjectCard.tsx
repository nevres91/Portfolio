import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

export const ProjectCard: React.FC<Project> = ({
  description,
  id,
  title,
  image,
  liveUrl,
}) => {
  return (
    <div //CONTAINER
      key={id}
      className="container flex relative w-[400px] h-[500px] overflow-hidden rounded-lg hover:translate-y-[-5px] duration-100"
    >
      <div //Card Content
        className={`flex flex-col card w-full h-full rounded-xl cursor-default p-3 justify-center items-center text-start 
      }`}
      >
        <div //CARD IMAGE
          className="w-full h-[223px] min-h-[223px] max-h-[40%] rounded-t-md relative border-2 border-white"
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
          <h4 className="text-light font-jura z-10 text-xl mt-2">{title}</h4>
        </div>
        <div //DESCRIPTION
          className="flex h-full w-full overflow-hidden z-10"
        >
          {" "}
          <p className="text-light font-jura-light text-sm z-10  line-clamp-6 overflow-hidden">
            {description}
          </p>
        </div>
        <div //Bottom
          className="flex justify-between w-full items-center mt-1 z-10"
        >
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jura-light text-sm text-blue-400 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-50"
            >
              Live Demo
            </a>
          ) : (
            ""
          )}
          <Link
            to={`/project/${id}`}
            onClick={() => window.scrollTo(0, 0)}
            className="py-[2px] px-2 bg-bloody border border-light rounded-md cursor-pointer hover:text-bloody hover:bg-light hover:border-bloody transition-all duration-100 font-jura-light"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="noise-card absolute"></div>
    </div>
  );
};
