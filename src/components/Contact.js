import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/info.css';
import BackHome from './BackHome';

const Contact = () => {
  const titleVariants = {
    hidden: {
      y: -50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .5,
        duration: .6
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        delay: .3
      }
    }
  }

  const containerVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .5,
        duration: .6,
        backgroundColor: ["#fd3", "#60f", "#fd3"]
      }
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        delay: .3
      }
    }
  }

  return(
    <motion.div 
      className="main-container" 
      animate={{backgroundColor: ['#f7f7f7', '#EF946C']}} 
      exit={{backgroundColor: ['#EF946C', '#f7f7f7']}}
    >
      <BackHome />
      <section className='contact-container'>
        <div className='contact'>
          <motion.h3 
          className='contact-email'
          variants={titleVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          >
            Contact me : tep.yith@gmail.com
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <h3>To learn more</h3>
            <div>
              <a href='https://www.linkedin.com/in/tep-y/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
              <a href='https://github.com/tep-y' target='_blank'><i className="fa-brands fa-github"></i></a>
              <a href='https://www.instagram.com/robauheart/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
              <a href='mailto:tep.yith@gmail.com' target='_blank'><i className="fa-solid fa-square-envelope"></i></a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
};

export default Contact;