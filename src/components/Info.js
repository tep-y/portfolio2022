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
        <section className='info'>
          <div className='row'>
            <div className="column center">
              <h3>Skills</h3>
            </div>
            <div className='column'>
              <div className='carousel'>
                <div className='change-outer'>
                  <div className='change-inner'>
                    <div className='element'><h4>HTML</h4></div>
                    <div className='element'><h4>CSS / SCSS</h4></div>
                    <div className='element'><h4>Javascript</h4></div>
                    <div className='element'><h4>ReactJS & Redux</h4></div>
                    <div className='element'><h4>And many more!</h4></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='info'>
          <div className='row'>
            <div className='column center'>
              <h3>Other Likes</h3>
            </div>
            <div className='column left'>
              <div className='container-other'>
                <div className='change-other'>
                  <h4 class="other-likes">Dogs, hockey, and potatoes</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='info'>
          <div className='row'>
            <div className='column center'>
             <h3>To Know More</h3>
            </div>
            <div className='column left'>
              <div className='container-other'>
                <div className='change-other'>
                  <div className='icons'>
                    <a href='https://www.linkedin.com/in/tep-y/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    <a href='https://github.com/tep-y' target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a href='https://www.instagram.com/robauheart/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href='mailto:tep.yith@gmail.com' target='_blank'><i className="fa-solid fa-square-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  )
};

export default Info;