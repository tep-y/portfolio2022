import React from 'react';
import { motion } from 'framer-motion';
import BackHome from './BackHome';
import '../assets/css/info.css';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const marqueeVariants = {
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

  const infoVariants = {
    hidden: {
      y: 200,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    }
  }

  return(
    <>
      <BackHome />
      <motion.div 
        className='info-container'
        variants={marqueeVariants} 
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
      <motion.div 
        className='about-container'
        variants={infoVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='column'>
          <img src='/images/IMG_0041.jpg' alt='tep yith web developer' />
        </div>
        <div className='column'><p>Hello! My name is Tep. I am a front-end web developer 
        with a good eye for design. I love dogs, hockey and doing Sudokus. 
        I am always curious about new and exciting technologies and methods.
        Based in Montréal, Québec, Canada, you can easily find me in a coffee shop coding, designing, and learning new things. 
        <Link to='/contact'> Contact me if you want to learn more.</Link></p>
        </div>
      </motion.div>
    </>
  )
};

export default AboutMe;