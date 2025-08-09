import React, { useState, useEffect } from "react";
import type { Project } from "../../types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 for mobile
  const totalCards = projects.length;
  const maxIndex = totalCards - visibleCards; // Last valid index for full set

  // Set visibleCards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1); // Mobile
      else if (window.innerWidth < 1024) setVisibleCards(2); // Tablet
      else setVisibleCards(3); // Desktop
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide effect (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [isTransitioning, maxIndex]);

  // Handle slide navigation
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
    }
  };

  const handleNext = () => {
    if (!isTransitioning && currentIndex < maxIndex) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Reset transition state after animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="relative w-full p-2 md:p-8">
      <div className="overflow-hidden w-full flex">
        <div
          className="flex w-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2 flex items-center justify-center"
              style={{ minWidth: `calc(100% / ${visibleCards})` }}
            >
              <ProjectCard
                description={project.description}
                id={project.id}
                title={project.title}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isTransitioning || currentIndex === 0}
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isTransitioning || currentIndex >= maxIndex}
      >
        &gt;
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalCards - visibleCards + 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-red-500"
                : "bg-gray-400 hover:bg-gray-500"
            } transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
