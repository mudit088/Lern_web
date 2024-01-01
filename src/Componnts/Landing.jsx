import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const img = [
    {
      url: '/Free-Online-Resources.jpg',
    },
    {
      url: '/great-teacher.jpg',
    },
    {
      url: '/Skillstork-1568x882.jpg',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? img.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === img.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === img.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [img.length]);

  return (
     
    <div className=' flex flex-col sm:flex-row'>

      <div className='pt-18'>
        <p className=' text-6xl sm:text-7xl pt-6 m-6 sm:m-12 ml-4 sm:ml-40 font-semibold'>
      <p className='flex'> <p className='dark:text-white'> Learn </p><p className='text-white'>.</p> <p className='text-blue-500'> Anything,</p></p>
       <p className='text-pink-300'> Anytime,</p> <p className='text-cyan-300'> Anywhere.</p>
       <p className='text-xl pt-2 sm:pt-10 dark:text-white'>
        Experience a customized learning journey that adapts to your unique needs and empowers you to excel in any subject.
        </p>
        <div className=' ml-4 sm:ml-20'>
        <button className='text-white bg-gradient-to-b text-lg from-cyan-500 to-blue-500 px-6 p-3 my-8 m-2 flext-items-center rounded-md hover:scale-110 duration-300 '>
        <ul>
          <li>
            <a href="#">Start Learning</a>
          </li>
        </ul>
        </button>
        <button className='text-white bg-gradient-to-b text-lg from-cyan-500 to-blue-500 px-6 p-3 my-8 m-2 flext-items-center rounded-md hover:scale-110 duration-300 '>
        <ul>
          <li>
            <a href="#">Join us</a>
          </li>
        </ul>
        </button>
        </div>
           </p>

        

  
      </div>
    

    <div className='max-w-[800px] h-[400px] w-full ml-4  sm:mr-36 sm:mt-12 sm:ml-36 relative'>
      <div
        style={{ backgroundImage: `url(${img[currentSlide].url})` }}
        className='w-full h-full mt-4 rounded-2xl bg-center bg-cover duration-500 flex justify-end'
      ></div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <div onClick={handlePrevSlide}>
          <BsChevronCompactLeft />
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <div onClick={handleNextSlide}>
          <BsChevronCompactRight />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;
