import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbaar = () => {
  return (
    <div className='dark'>
      <div className=''>
      <div className='flex sm:justify-between items-center rounded-xl   h-16 sm:w-full sm:h-20 text-white  sm:ml-0 sm:px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r from-black to-gray-700'>
        <div>
          <h1 className='text-3xl sm:text-5xl font-signature sm:ml-2 m-4 sm:m-0'>Lern</h1>
        </div>
        <ul className='flex'>
          
          <li className='py-8 pl-20 pr-6 sm:pr-20 cursor-pointer capitalize text-lg text-white hover:scale-105 duration-200'>
            Contact
          </li>
          <li className='py-8 pr-6 sm:pr-20 cursor-pointer capitalize text-lg text-white hover:scale-105 duration-200'>
            <NavLink
              to='/SignIn'
              activeClassName='text-red-500'
              className='text-white'
            >
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbaar;
