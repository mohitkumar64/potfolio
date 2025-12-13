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
    tech: ["React", "Tailwind", "motion"]
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
    <motion.div
      name ={"projects"}
      animate={{ backgroundColor: back[activeIndex].color }}
      transition={{ duration: 0.6 }}
      className="text-white flex flex-col px-20 py-20 gap-20"
    >
      <h1 className="font-extrabold text-7xl leading-[1.5] border  mb-10 text-transparent bg-linear-to-b from-white via-gray-500 to-neutral-600 bg-clip-text [-webkit-text-stroke:2px_rgba(255,255,255,0.35)] ">
  Projects
</h1>




      <div className="flex px-5 gap-x-10">
        <div className="flex flex-col gap-42 w-1/2">

          {projects.map((p, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { amount: 0.7 });

            // Set active card on scroll
            useEffect(() => {
              if (inView) {
                setActiveIndex(i);
              }
            }, [inView]);

            return (
              <motion.div
                key={i}
                ref={ref}
                
          
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}

             
                animate={{
                  color: activeIndex === i ? "white" : "gray",
                }}
               

                whileHover={{ color: "white" }}
                className="w-full text-gray-500"
              >
                <h1 className="text-3xl font-bold">{p.title}</h1>
                <p className="mt-6 text-2xl w-3/4">{p.desc}</p>

                <motion.div className="flex flex-wrap w-full mt-10">
                  {p.tech &&
                    p.tech.map((v, i) => (
                      <motion.div
                        key={i}
                        
                        className="bg-gray-600 hover:bg-gray-700 m-5 w-30 border-2 shadow-md shadow-gray-600/50 border-gray-800 rounded-2xl h-10 text-center font-semibold flex flex-col justify-center items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {v}
                      </motion.div>
                    ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Sticky image */}
        <div className="w-1/2">
          <div className="sticky top-20 w-[800px] h-[400px] bg-white rounded-xl overflow-hidden">
            <motion.img
              key={activeIndex}
              src={projects[activeIndex].img}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
