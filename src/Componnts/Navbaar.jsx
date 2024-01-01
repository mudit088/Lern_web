import React from 'react'
import {Link,NavLink  } from "react-router-dom";

const Navbaar = () => {
  return (
    <div className='flex justify-between items-center rounded-xl h-20 text-white m-2 ml-4 sm:m-2 px-2 sm:px-6 bg-gradient-to-r from-cyan-500 to-blue-500  '>
    <div>
      <h1 className='text-5xl font-signature sm:ml-2 m-4 sm:m-0'>Lern</h1>
    </div>
    <ul className='flex'>
      
        <li  className='py-4 pl-2 pr-5 sm:pr-20 cursor-pointer capitalize text-lg text-white hover:scale-105 duration-200'>
          Features
        </li>

        <li  className='py-4 pr-5 sm:pr-20 cursor-pointer capitalize text-lg text-white hover:scale-105 duration-200'>
          Contact
        </li>

        <li > 
          <NavLink to='/SignIn' className={(isActive)=>`"py-4 pr-5 sm:pr-20 cursor-pointer capitalize text-lg text-white hover:scale-105 duration-200 ${isActive?'text-white' : 'text-red-500'}"`
          }>
            Sign In
          </NavLink>
        </li>
   
    </ul>
    </div>
  )
}

export default Navbaar