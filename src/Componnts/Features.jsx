import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      if (!isAnimating) {
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
        setIsAnimating(true);
      }
    }, 3000); // Change the interval duration here (3000ms = 3 seconds)

    return () => {
      clearInterval(flipInterval); // Clear the interval on unmount or re-render
    };
  }, [isAnimating]);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
   <>
           <h1 className='text-5xl text-blue-600 flex items-center justify-center pb-36 font-bold'>Features</h1>
    
    <div className=" items-center justify-center dark:bg-gray-900  w-screen h-screen m-2 sm:m-0">
      <div className='flex flex-col sm:flex-row'>
      <div className="flex flip-card w-[600px] h-[360px] rounded-md m-2 ml-10" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner absolute shadow-xl shadow-blue-600 w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px]  rounded-lg p-4"
            // style={{ backgroundImage: 'url(public/flip.jpg)' }}
          >
            
          <p className='text-6xl pt-16 pl-28 font-semibold'> <p className='text-blue-500'>Learn</p> <p className='text-pink-300'>with</p> <p className='text-cyan-300'>AI assistance</p> </p>
          </div>


          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: 'url(/Skillstork-1568x882.jpg)' }}
          >
            
            
          </div>

          
        </motion.div>
        </div>
        
       <div>
        <span>
        <p className='p-20 ml-20 font-semibold text-3xl  text-blue-600 '>
        Enhance your learning experience by harnessing the power of AI. <br /> Generate and explore topics with AI, gain comprehensive <br /> knowledge and insights  to accelerate your learning journey.
        </p>
        </span>
        </div>
        

        
        
        


      </div>



      <div className="flip-card w-[600px] h-[360px] rounded-md m-2 flex justify-end float-right mr-10 mt-20" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: 'url(public/flip.jpg)' }}
          >
            <h1 className="text-2xl font-bold">Sky</h1>
            <p>Live on top of the world</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: 'url(public/Skillstork-1568x882.jpg)' }}
          >
            <h1 className="text-2xl font-bold">Earth</h1>
            <p>Or in the maze of the city</p>
          </div>

          
        </motion.div>
       
      </div>

    </div>
    </>
  );
};

export default Features;
