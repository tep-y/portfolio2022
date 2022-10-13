import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import BackHome from './BackHome';
import '../assets/css/info.css';
// import portrait from '../images/IMG_0041.jpg';

const Info = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6
      }
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.6
      }
    }
  }

  return(
    <>
      <BackHome />
      <motion.div 
        className='info-container'
        variants={containerVariants} 
        initial='hidden' 
        animate='visible' 
        exit='exit'  
      >
        <div className='marquee'>
          <div className='marquee-inner'>
            <span className='info-subject'>&bull; bonjour! hi! bonjour! hi! &bull;</span>
            <span className='info-subject'>&bull; bonjour! hi! bonjour! hi! &bull;</span>
            <span className='info-subject'>&bull; bonjour! hi! bonjour! hi! &bull;</span>
            <span className='info-subject'>&bull; bonjour! hi! bonjour! hi! &bull;</span>
          </div>
        </div>
      </motion.div>
      <div className='about-container'>
        <div className='column'>
          <img src='/images/IMG_0041.jpg' alt='tep yith web developer' />
        </div>
        <div className='column'><p>Hello! My name is Tep. I am a front-end web developer 
        with a good eye for design. I love dogs, hockey and doing Sudokus. 
        I am always curious about new and exciting technologies and methods.
        Based in Montréal, Québec, you can easily find me in a coffee shop coding and/or designing.</p>
        </div>
      </div>
    </>
  )
};

export default Info;