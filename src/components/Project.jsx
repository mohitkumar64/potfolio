import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "TestMeet – Real-Time Multiplayer AI Quiz Platform",
    timeline: "Oct 2025 – Present",
    img: "./testmeet.png",
    desc: "A real-time AI-driven quiz system that generates questions instantly, keeps all participants in sync, and provides hosts with full control over the quiz session.",
    tech: ["React", "Tailwind", "Node", "Express", "MongoDB", "Socket.io", "OpenAI API"]
  },
  {
    title: "Project 2",
    desc: "A modern personal portfolio showcasing my projects, skills, and experience with a clean UI and smooth animations.",
    img: "./potfolio.png",
    tech: ["React", "Tailwind", "Motion"]
  },
  {
    title: "Project 3",
    desc: "React, Tailwind, Node...",
    img: "/images/p3.png"
  }
];

const back = [
  { color: "rgb(0,0,0)" },
  { color: "rgb(23,23,23)" },
  { color: "rgb(0,0,0)" }
];

export default function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      name="projects"
      animate={{ backgroundColor: back[activeIndex].color }}
      transition={{ duration: 0.6 }}
      className="text-white px-10 md:px-20 py-16 lg:py-24"
    >
      {/* Heading */}
      <h1 className="font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight mb-14 text-transparent bg-linear-to-b from-white via-gray-500 to-neutral-600 bg-clip-text [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]">
        Projects
      </h1>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT: Project list */}
        <div className="flex flex-col gap-24 lg:w-1/2">
          {projects.map((p, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { amount: 0.9 });

            useEffect(() => {
              if (inView) setActiveIndex(i);
            }, [inView, i]);

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                animate={{ color: activeIndex === i ? "#ffffff" : "#9ca3af" }}
                className="flex flex-col"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {p.title}
                </h2>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-400 max-w-xl">
                  {p.desc}
                </p>

                {/* Mobile image (inline) */}
                <div className="mt-6 lg:hidden w-full h-[220px] rounded-xl overflow-hidden bg-neutral-900">
                  <motion.img
                    src={p.img}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
                  {p.tech?.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 text-xs sm:text-sm hover:bg-gray-700  shadow-md shadow-gray-600/50 border-gray-800   font-semibold bg-neutral-800 border-2 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT: Sticky image (desktop only) */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="sticky top-24 w-full h-[420px] rounded-2xl overflow-hidden bg-neutral-900">
            <motion.img
              key={activeIndex}
              src={projects[activeIndex].img}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
