import {LayoutTextFlip} from './components/LayoutTxt'
import { motion, useTransform , useScroll, delay} from 'motion/react';
import './App.css'

import Navbar from './components/Navbar'
import Section1 from './Section-1';
import Section2 from './Section-2';
import ProgressBar from './components/ProgressBar';
import ProjectSection from './components/Project';
import Contact from './components/Content';


  const levelVariant = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } ,
  
};



function App() {
    const { scrollYProgress} = useScroll();
    const y1 = useTransform(scrollYProgress , [0,1] , [0,-300]);
   
   


  return (

    <div className='relative  bg-black  flex flex-col gap-y-80 '>
      <ProgressBar />
      <Navbar />
      <motion.div style={{y : y1}}> 
        <Section1 />
      </motion.div>
    < motion.div  > 
       <Section2 />
    </motion.div>
    {/* skill treee */}
    
    
    <motion.div 
       initial="hidden"
        
       whileInView={"show"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.9 , delayChildren : 0.3}
        }
      }}
    
    className=' relative flex flex-col w-full items-center' >
        
        
        <div className=" relative z-40 node-1 flex justify-center items-center">
            <p className='text-white  text-2xl md:text-4xl font-bold'>My Stack</p>
            <motion.div  variants={levelVariant}
              transition={{
                delay : 0.3
              }}
            className=" z-0 top-40 left-0  rotate-50 line ">
            </motion.div>
             <motion.div  variants={levelVariant}
              transition={{
                delay : 0.3
              }}
             className=" z-0 top-22 left-0  rotate-70 line-4 ">
            </motion.div>
            <motion.div  variants={levelVariant}
              transition={{
                delay : 0.3
              }}
            className="top-50 z-0   left-25 rotate-0 line-3  "> 
            </motion.div>
            <motion.div  variants={levelVariant}
              transition={{
                delay : 0.3
              }}
            className=" top-22 z-0 right-0 rotate-285 line-4">
            </motion.div>
             <motion.div  variants={levelVariant}
              transition={{
                delay : 0.3
              }}
             className=" top-40 z-0 right-0 rotate-310 line ">
            </motion.div>
             {/* <div  variants={levelVariant}
              transition={{
              delay : 0.3}}
             className=" absolute -right-50 top-20 node flex items-center justify-center"></div>
             <div className=" absolute -left-50 top-20 node flex items-center justify-center"></div> */}
             
             

        </div>

              {/* level-2 */}
            
        <motion.div 
         variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.9 , delayChildren : 0.3}
        }
      }}

        className='flex  mt-[120px] gap-x-60'>
              <motion.div 
              variants={levelVariant}
              transition={{
                delay : 0.3
              }}
              className=" relative node flex items-center justify-center">
                   <img className='z-10 w-15'  src="./css.svg" alt="" />
                     <motion.div 
                         variants={levelVariant}
                        transition={{
                          delay : 0.3
                        }}
                     className=" top-20 left-0  rotate-50 line-2 ">
                      </motion.div>
                    {/* <motion.div className=" top-20 right-0 rotate-30 line ">
                      </motion.div> */}
                      <motion.div 
                         variants={levelVariant}
                          transition={{
                            delay : 0.3
                          }}
                      className="  top-20 right-0 rotate-310 line-2 ">
                      </motion.div>
              </motion.div>
              <motion.div 
                variants={levelVariant}
             transition={{
                delay : 0.3
              }}
              className="node flex items-center overflow-hidden justify-center">
                <img className='z-10  w-15'  src="./html.svg" alt="" />
              </motion.div>
              <motion.div 
              
                variants={levelVariant}
              transition={{
                delay : 0.3
              }}
              className=" relative z-100 node flex items-center justify-center">
                      <img className='z-10 w-15 '  src="./js.svg" alt="" />
                       <motion.div 
                         variants={levelVariant}
                          transition={{
                            delay : 0.3
                          }}
                       className=" top-20 left-0  rotate-50 line-2 h-[200px] ">
                      </motion.div>
                      
                      <motion.div 
                      variants={levelVariant}
                      transition={{
                        delay : 0.3
                      }}
                      className=" top-20 right-0 rotate-310 line-2 ">
                      </motion.div>
              </motion.div>
        </motion.div>


           {/* level-3 */}           

       <motion.div 
          variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.9 , delayChildren : 0.3}
          }
        }}
       className='flex  mt-[120px] gap-x-85'>

              <motion.div 
                  variants={levelVariant}
                  transition={{
                  delay : 0.3
                }}
                className=' relative flex -mt-[20px] gap-x-30'>
                  
                  <motion.div className=" relative node flex items-center justify-center"> 
                    <img className='z-10 w-15'  src="./tailwind.svg" alt="" />
                  </motion.div>
                      
              </motion.div>
              
              <motion.div 
                
              className='flex -mt-[20px] gap-x-40'>
                      <motion.div 
                      variants={levelVariant}
                      transition={{
                      delay : 0.3
                       }}
                      className=" node  left-10 flex items-center justify-center">
                          <img className='z-10 w-15'  src="./motion.svg" alt="" />
                    </motion.div>
                    <motion.div
                     variants={levelVariant}
                     transition={{
                      delay : 0.3
                    }}
                    className=" relative node flex items-center justify-center"> 
                        <img className='z-10 w-15'  src="./React.svg" alt="" />
                        <motion.div className=" top-20 left-3  rotate-30 line-3 h-[200px] ">
                      </motion.div>
                    </motion.div>
                    <motion.div className="node-2 flex  items-center justify-center">
                       
                    </motion.div>
                    <motion.div
                     variants={levelVariant}
                    transition={{
                      delay : 0.3
                    }}
                    className=" relative node flex flex-col  items-center justify-center">  
                        <img className='z-10 w-20'   src="./node.svg" alt="" />  
                          
                          <motion.div className="  top-20 right-0 rotate-320 line-2 ">
                          </motion.div>
                    </motion.div>  

                      
              </motion.div>
              
          
        </motion.div>


          <motion.div
             variants={levelVariant}
              transition={{
              delay : 0.4
            }}
          className='flex  mt-[120px] gap-x-130 '>

              <div className=' relative flex -mt-[20px] gap-x-30'>
                
              </div>
              
              <div className='flex -mt-[20px] gap-x-50'>
                      <div className=" node-4  left-10 flex items-center justify-center">
                    </div>
                      <div className=" node  left-10 flex items-center justify-center">
                          <img className='z-10 w-15'  src="./next.svg" alt="" />
                    </div>
                    <div className=" relative node-4 flex items-center justify-center"> 
                        
                       
                    </div>
                    <div className="node-2 flex  items-center justify-center">
                       
                    </div>
                    <div className=" relative node flex flex-col  items-center justify-center">  
                        <img className='z-10 w-20'   src="./express.svg" alt="" />  
                         <div className='flex mt-100 absolute -right-5   gap-x-160'>
                          <div className=" relative node flex items-center justify-center">
                                  <img className='z-10 w-30'  src="./mongo.svg" alt="" />
                          </div> 
                          </div>   
                          <div className="top-25 z-0   left-15 rotate-0 line-3  "> 
                         </div>
                    </div>  

                      
              </div>
              
          
        </motion.div>               

        
                     







          
                     

       

    </motion.div>
     
     <motion.div className='mt-40  w-full z-2'>
            <ProjectSection />
      </motion.div>       
      <Contact />

    </div>
  );
}

export default App;
