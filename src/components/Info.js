import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import '../assets/css/info.css';

const Info = ({backgroundColor}) => {
  useEffect(() => {
    const bodyElm = document.querySelector('body');
    bodyElm.style.backgroundColor = backgroundColor;
  }, []);

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
      <motion.div 
        className='container-info'
        variants={containerVariants} 
        initial='hidden' 
        animate='visible' 
        exit='exit'  
      >
        <section className='info center'>
          <div className='marquee'>
            <div className='marquee-inner'>
              <span><span className='info-subject'>Skills</span> HTML • Javascript • CSS • SASS • ReactJS • Figma • And many more!</span>
              <span><span className='info-subject'>Skills</span> HTML • Javascript • CSS • SASS • ReactJS • Figma • And many more!</span>
              <span><span className='info-subject'>Skills</span> HTML • Javascript • CSS • SASS • ReactJS • Figma • And many more!</span>
              <span><span className='info-subject'>Skills</span> HTML • Javascript • CSS • SASS • ReactJS • Figma • And many more!</span>
            </div>
          </div>
        </section>
        <section className='info'>
          <div className='marquee'>
            <span><span className='info-subject'>Other likes</span>Dogs, hockey, and potatoes</span>
          </div>
        </section>
        <section className='info'>
          <div className='marquee'>
            <span>
              <span className='info-subject'>To know more</span>
                <a href='https://www.linkedin.com/in/tep-y/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href='https://github.com/tep-y' target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href='https://www.instagram.com/robauheart/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                <a href='mailto:tep.yith@gmail.com' target='_blank'><i className="fa-solid fa-square-envelope"></i></a>
            </span>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  )
};

export default Info;