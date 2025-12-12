
import { motion , useTransform , useScroll, useMotionValueEvent } from "motion/react";


function ProgressBar() {
const { scrollYProgress}  = useScroll();
const y2 = useTransform(scrollYProgress , [0,1] , [0,5000]);
const height = useTransform(scrollYProgress ,[0,1] , [0,400]);

  return (
    <>
    <span className=" absolute  left-8.5 top-8 w-3 h-3  z-6 rounded-full bg-green-600"></span>
    <motion.div
        layout
        style={{y : y2 , height}}     
      className='absolute w-px left-10 top-15  z-9 bg-linear-to-b from-violet-500 to-fuchsia-500 '>
      </motion.div>
      <motion.div className='absolute w-px left-10 top-10 py-5 h-full  z-5 bg-gray-700'>
      </motion.div> 
      </>
  );
}

export default ProgressBar;