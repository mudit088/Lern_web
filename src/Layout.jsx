import React, { useState } from 'react';
import Navbaar from './Componnts/Navbaar';
import Landing from './Componnts/Landing';
import { Outlet } from 'react-router-dom';
import Signin from './Componnts/Signin';
import Features from './Componnts/Features';
import Sponsers from './Componnts/Sponsers';
import Grow from './Componnts/Grow';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the value of darkMode
  };

  return (
    <div className={darkMode ? 'dark' : ''} style={{margin :"4"}}>
      <div className={darkMode ? 'bg-gray-900 sm:w-full-screen sm:h-full-screen w-full h-full' : ''}>
        <Navbaar />
        <button
        className='bg-gray-700 text-white relative mt-3 ml-4 p-2 border-2 rounded-xl'
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
        <Outlet />
        <Landing />
        <Features/>
        <Sponsers/>
        <Grow/>
        
      </div>
      
    </div>
    
      
  );
};

export default Layout;
