import React, { useState } from 'react';
import Navbaar from './Componnts/Navbaar';
import Landing from './Componnts/Landing';
import { Outlet } from 'react-router-dom';
import Signin from './Componnts/Signin';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the value of darkMode
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={darkMode ? 'bg-black  w-full h-full' : ''}>
        <Navbaar />
        <button
        className='bg-gray-700 text-white relative ml-4 p-2 border-2 rounded-xl'
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
        <Outlet />
        <Landing />
      </div>
      
    </div>
  );
};

export default Layout;
