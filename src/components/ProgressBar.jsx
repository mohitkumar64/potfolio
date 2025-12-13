
import { motion , useTransform , useScroll, useMotionValueEvent } from "motion/react";


function ProgressBar() {
const { scrollYProgress}  = useScroll();
const y2 = useTransform(scrollYProgress , [0,1] , [0,4400]);
const height = useTransform(scrollYProgress ,[0,1] , [0,390]);

  return (
    <>
    <span className=" absolute left-4 top-18 md:left-8.5 md:top-8 w-3 h-3  z-6 rounded-full bg-green-600"></span>
    <motion.div
        layout
        style={{y : y2 , height}}     
      className='absolute w-px overflow-hidden  md:left-10 md:top-15  left-5 shadow shadow-violet-600 top-10 z-9 bg-linear-to-b from-violet-500 to-fuchsia-500 '>
      </motion.div>
      <motion.div className='absolute w-px left-5 top-20 md:left-10 md:top-10 py-5 h-full  z-5 bg-gray-700'>
      </motion.div> 
      </>
  );
}

export default ProgressBar;