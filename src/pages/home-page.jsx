// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './navbar'
import { motion } from 'framer-motion';



const HomePage = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="mt-16 px-4 flex flex-col items-center justify-center">
        <motion.h1
          className="text-xl md:text-3xl lg:text-5xl mt-16 font-semibold text-justify leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 5 }}
        >
          Innovating the Future,
          <br />
          &nbsp;&nbsp;One Step at a Time
        </motion.h1>
      </div>
    </div>
  )
}

export default HomePage 