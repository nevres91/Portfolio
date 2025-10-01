interface SkillCardProps {
  url: string;
  title: string;
  alt: string;
  scale?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  url,
  title,
  alt,
  scale = "100",
}) => {
  return (
    <div
      className={`scale-${scale} flex  sm:flex-col w-full h-fit sm:w-[120px] sm:h-[120px] rounded-xl border border-gray-500/20 hover:border-red-500/50 p-2 pr-5 sm:pr-2 justify-between bg-dark/60 hover:bg-white/4 cursor-pointer hover:shadow-2xl shadow-red-600/30 hover:-translate-y-1 transition-all ease-in-out duration-150`}
    >
      <div className="flex items-center justify-center">
        <img src={url} alt={alt} />
      </div>
      <div className="flex items-center justify-center font-jura-light text-light text-md font-bold sm:text-sm w-[65%] sm:w-auto ">
        {title}
      </div>
    </div>
  );
};
