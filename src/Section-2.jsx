import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import { PixelatedCanvasDemo } from "./components/Pixelated-CanvasDemo";

const pVaraints = {
  "initial" : {
    y : 10 , opacity : 0 
  },
  "animate" : {
    y : 0 , opacity : 1 
  }
}
const dVaraints = {
  "initial" : {
    y : 20 , opacity : 0 
  },
  "animate" : {
    y : 0 , opacity : 1 ,  transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.3,
    }, 
  }
  
}


function Section2() {
  return (
    <div className="relative bg-black flex justify-center py-14 gap-16">
      
     
      <motion.div
        className="w-[380px] bg-[rgb(15,15,15)] border border-white/10 rounded-xl p-5 flex flex-col items-center gap-4"
      >
        <PixelatedCanvasDemo />

        <div className="text-white flex flex-col gap-1 items-center">
          <p className="font-bold text-3xl">Mohit Kumar</p>
          <p className="px-3 py-1 border font-semibold rounded-md border-white/10 text-gray-400 bg-neutral-800 text-sm">
            Full Stack Developer
          </p>
        </div>

        <div className="text-neutral-400 text-xl flex gap-5 mt-1">
          <motion.a
            


            whileHover={{ scale: 0.9, color: "white" }}
           
            className="text-2xl"
            href=""
          >
            <i className="bi bi-linkedin"></i>
          </motion.a>

          <motion.a
             whileHover={{ scale: 0.9, color: "white" }}
            className="text-2xl"
            href=""
          >
            <i className="bi bi-github"></i>
          </motion.a>
        </div>
      </motion.div>

    
      <motion.div
         variants={dVaraints}
            initial = {"initial"}
            animate =  {"animate"}
            transition = {
              {
                duration : 0.6
              }
            }
      
      
      className="w-1/2 bg-transparent border border-white/10 rounded-xl p-8 md:p-5 flex flex-col gap-6">
        <h2 className="text-white text-4xl font-bold text-left">About Me</h2>

        <motion.p 
          variants={pVaraints}
           
            transition = {
              {
                duration : 0.6 
              }
            }
        
        className="text-neutral-400 text-lg leading-relaxed text-left">
          I’m a Full-Stack Developer who loves experimenting, building,
          and understanding how things work. I learn by doing — breaking
          problems down, trying different approaches, and improving step by step.
        </motion.p>

        <motion.p
           variants={pVaraints}
            
            transition = {
              {
                duration : 0.8
              }
            }
        
        className="text-neutral-400 text-2lg leading-relaxed text-left">
          I enjoy being challenged, and I care about building clean, functional,
          real-world products.
        </motion.p>

        <div className="flex flex-col gap-1 mt-1">
          <p className="text-white font-semibold text-2lg">Current Focus</p>
          <p className="text-neutral-500 text-2lg">Real-time interfaces, motion-driven UI.</p>
        </div>

                     <div className="flex gap-4 mt-4">
                  <motion.a
                      variants={pVaraints}
                    
                    transition = {
                      {
                        duration : 0.8
                      }
            }
                     whileHover={{ scale: 0.97 }}
                     className="px-5 py-2 rounded-md bg-white text-black font-semibold text-lg"
                     href="#projects"
                  >
                     View Projects
                  </motion.a>

                  <motion.a

                      variants={pVaraints}
            
                      transition = {
                        {
                         duration : 0.8
                        }
                      }
                     whileHover={{ scale: 0.97 }}
                     className="px-5 py-2 rounded-md border border-white/20 text-white font-semibold text-lg"
                     href="/resume.pdf"
                     download
                  >
                     Download Resume
                  </motion.a>
             </div>
      </motion.div>
    </div>
  );
}

export default Section2;
