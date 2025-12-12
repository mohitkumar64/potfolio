import {LayoutTextFlip} from './components/LayoutTxt'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';

import { useState } from 'react';

function Section1() {

  const {scrollY} = useScroll();
//    useMotionValueEvent(scrollY , "change" , (e)=>{
//   console.log(e);
  
//  })
  const opacity = useTransform(scrollY , [0 , 200] , [1 , 0])
   const scale = useTransform(scrollY , [0 , 250] , [1 , 0])
  return (
    
   
<div className="relative bg-black  flex flex-col outline-none">

            

        <motion.section
            className="flex flex-col items-center justify-center mt-[150px]"
          >
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center"
        >
          <p className="text-5xl font-bold text-white mb-5">
            Hi, I’m Mohit Kumar
          </p>

          <div className="mt-4">
            <LayoutTextFlip />
          </div>

        
        </motion.div>
</motion.section>

    </div>
  );
}

export default Section1;





