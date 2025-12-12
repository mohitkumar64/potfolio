import {LayoutTextFlip} from './components/LayoutTxt'
import { motion, useTransform , useScroll, delay} from 'motion/react';


import Navbar from './components/Navbar'
import Section1 from './Section-1';
import Section2 from './Section-2';
import ProgressBar from './components/ProgressBar';
import ProjectSection from './components/Project';
import Contact from './components/Content';
import SkillTree from './components/SkillTree';


 



function HomePage() {
    const { scrollYProgress} = useScroll();
    const y1 = useTransform(scrollYProgress , [0,1] , [0,-300]);
   
   


  return (

    <div name={"/"} className='relative  bg-black  flex flex-col gap-y-30 md:gap-y-80 '>
      <ProgressBar />
      <Navbar />
      <motion.div style={{y : y1}}> 
        <Section1 />
      </motion.div>
    < motion.div  > 
       <Section2 />
    </motion.div>

    {/* skill treee */}
    <SkillTree />
    
   
     
     <motion.div className='mt-40  w-full z-2'>
            <ProjectSection />
      </motion.div>       
      <Contact />

    </div>
  );
}

export default HomePage;
