import React from 'react'

const Sponsers = () => {
  return (
    <div className='w-full h-full flex justify-center items-center mt-20 sm:mt-0'>
    <section className='m-4 p-4  sm:m-10 sm:pl-20 sm:pr-20 rounded-2xl bg-gray-700'>
      <div>
        <h1 className='text-4xl sm:text-6xl flex justify-center items-center mt-5 sm:mt-10 text-white pt-5'>
          Powered By
        </h1>
        <div className='flex flex-wrap justify-center items-center mt-10 sm:mt-20'>
          <img src="public/palm-bc250852.svg" className='p-2 sm:p-4' alt="" />
          <img src="public/mongodb-54cbbba4.svg" className='p-2 sm:p-4' alt="" />
          <img src="public/gcp-e9479d51.svg " className='w-80 p-2 sm:p-4' alt="" />
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default Sponsers