import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./lib/util";
 
export const LayoutTextFlip = ({
  text = "A full-stack developer focused on",
  words = ["real-time applications", "high-performance products", "modern web experiences"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      
      
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      
      
    }, duration);
 
    return () => clearInterval(interval);
  }, [words, duration]);
 
  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-[10px] text-neutral-400 m-2   font-bold tracking-tight drop-shadow-lg md:text-2xl lg:text-4xl"
      >
        {text}
      </motion.span>
 
      <motion.span
        layout
        className="  relative w-fit overflow-hidden rounded-md
  bg-white/10 px-2 py-1 md:py-2 md:px-4 backdrop-blur-md
  text-white font-semibold border border-white/20
  shadow-sm text-[10px] md:text-2xl lg:text-4xl"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};