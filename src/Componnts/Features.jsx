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
  
    <div className='dark:bg-gray-900 w-full h-full'>
    <h1 className='text-6xl text-black dark:text-white flex items-center justify-center sm:pb-36 mt-36 p-10 '>Features</h1>

    
    <div className='flip-card w-full sm:w-[600px] h-[360px] sm:absolute rounded-md m-4 sm:m-2 ml-0 sm:ml-10' onClick={handleFlip}>
  <motion.div
    className='flip-card-inner shadow-xl bg-pink-100 shadow-blue-600 w-full h-full sm:w-[100%] sm:h-[100%]'
    initial={false}
    animate={{ rotateY: isFlipped ? 180 : 360 }}
    transition={{ duration: 0.6, animationDirection: 'normal' }}
    onAnimationComplete={() => setIsAnimating(false)}
  >
    <div className='flip-card-front w-full h-full bg-cover border-[1px] rounded-lg sm:p-4'>
      <p className='text-6xl pt-8 sm:pt-16 pl-4 sm:pl-10 font-semibold'>
        <span className='text-blue-500'>Learn</span>
        <br />
        <span className='text-pink-300'>with</span>
        <br />
        <span className='text-cyan-300'>AI assistance</span>
      </p>
    </div>
    <div
      className='flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4'
      style={{ backgroundImage: 'url(/aipic.png)' }}
    ></div>
  </motion.div>
</div>

      
     
        <p className='font-semibold text-xl sm:text-3xl text-blue-600 sm:pl-96 sm:ml-80 sm:mt-36 p-2 mt-20'>
          Enhance your learning experience by harnessing the power of AI.
          <br />
          Generate and explore topics with AI, gain comprehensive knowledge and insights to accelerate your learning journey.
        </p>
      
    
    

      
      <div className="flip-card w-[600px] h-[360px] rounded-md sm:mt-72 mt-10 ml-10  sm:mr-10 mb-20 float-right  mt-20" onClick={handleFlip}>
        <div>
        <motion.div
          className="flip-card-inner shadow-xl  shadow-pink-300 bg-yellow-100 w-[100%] h-[100%] absolute"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-1 sm:p-4"
            // style={{ backgroundImage: 'url(public/flip.jpg)' }}
          >
            <p className=' p-5 text-6xl  pt-2 sm:pt-10  pl-64 sm:pl-28 font-semibold'> <p className='text-blue-500'>Progress</p> <p className='text-pink-300'>Monitoring made</p> <p className='text-cyan-300'>Simple</p> </p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: 'url(/monitoring3.jpg)' }}
          >
          
          </div>

          
        </motion.div>
        </div>

       
      </div>
      <div className='pt-36'>
        <span>
        <p className=' mt-64 sm:ml-10 p-2 font-semibold sm:text-3xl text-xl text-pink-300 '>
        Keep tabs on your educational achievements and stay informed about your progress at every step. Our dashboard provides real-time updates, empowering you to make informed decisions on your learning journey.
        </p>
        </span>
        </div>
        
    </div>


        
        <div className='h-screen w-screen'>
  <div className='flip-card w-full sm:w-[80%] lg:w-[600px] h-[360px] mb-56 sm:mt-10 sm:ml-2 sm:absolute rounded-md' onClick={handleFlip}>
    <motion.div
      className='flip-card-inner mt-40  shadow-xl bg-blue-200 shadow-cyan-300 w-[100%] h-[100%] absolute'
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 0.6, animationDirection: 'normal' }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <div className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] rounded-lg p-4'>
        <p className='text-6xl pt-16 pl-10 font-semibold'>
          <span className='text-blue-500'>Test</span>
          <br />
          <span className='text-pink-300'>Your Subject</span>
          <br />
          <span className='text-cyan-500'>Experties</span>
        </p>
      </div>
      <div
        className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
        style={{ backgroundImage: 'url(/test2.jpg)' }}
      ></div>
    </motion.div>
  </div>
 <div className='sm:pl-64 sm:pt-36'>
  <span>
    <p className='font-semibold text-xl sm:text-3xl text-cyan-500 sm:mt-40 sm:m-4 sm:pl-96 mt-20 p-2'>
    Engage in interactive quizzes that challenge your understanding of the topics you have learned, allowing you to assess your proficiency and gain valuable insights for further growth.
    </p>
    </span>
    </div>
    </div>
    </>
  


    
    
        
        


    
    
  );
};

export default Features;
