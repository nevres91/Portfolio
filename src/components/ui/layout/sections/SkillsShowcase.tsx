import React from "react";
import { motion } from "framer-motion";

const frameworks = [
  { name: "React", color: "#61DAFB", icon: "/react.svg" },
  { name: "Angular", color: "#DD0031", icon: "/angular.svg" },
  { name: "Vue", color: "#42b883", icon: "/vue.svg" },
  { name: "Svelte", color: "#FF3E00", icon: "/svelte.svg" },
  { name: "Solid", color: "#2C4F7C", icon: "/solid.svg" },
  { name: "Astro", color: "#FF5D01", icon: "/astro.svg" },
  { name: "Remix", color: "#ffffff", icon: "/remix.svg" },
  { name: "Nuxt", color: "#00DC82", icon: "/nuxt.svg" },
  { name: "Laravel", color: "#F9322C", icon: "/laravel.svg" },
];

export default function SkillsShowcase() {
  const rows = 8;
  const cols = 20; // enough to fill wide screens

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden py-28">
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-16">
        Powering your favorite <br />
        <span className="text-gray-300">frameworks and tools</span>
      </h2>

      <div className="relative flex flex-col gap-6 items-center">
        {[...Array(rows)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center"
            style={{
              transform: `translate3d(${
                rowIndex % 2 === 0 ? 12 : -12
              }px, 0, 0)`,
              gap: "24px",
            }}
          >
            {[...Array(cols)].map((_, colIndex) => {
              const shouldShowIcon =
                rowIndex >= 2 &&
                rowIndex <= 3 &&
                colIndex >= 5 &&
                colIndex <= 14;
              const fw =
                shouldShowIcon &&
                frameworks[(colIndex + rowIndex) % frameworks.length];

              return (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  whileHover={{ scale: fw ? 1.1 : 0.95 }}
                  className={`w-[96px] h-[96px] rounded-2xl bg-[#111111] flex items-center justify-center transition-all duration-300 relative ${
                    fw ? "opacity-100" : "opacity-45"
                  }`}
                >
                  {fw && (
                    <motion.img
                      src={fw.icon}
                      alt={fw.name}
                      className="w-10 h-10 object-contain"
                      whileHover={{
                        filter: `drop-shadow(0 0 12px ${fw.color})`,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Fade overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      </div>
    </section>
  );
}
