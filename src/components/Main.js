import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Main = ({backgroundColor}) => {
  useEffect(() => {
    const bodyElm = document.querySelector('body');
    bodyElm.style.backgroundColor = backgroundColor;
  }, []);

  const navVariants = {
    hidden: {
      x: '50vw',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: 'tween',
        ease: 'easeIn'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        delay: 0.3
      }
    }
  }

  return(
    <div>
      <Header />
      <nav>
        <div className="row">
          <div className="column">
          </div>
          <div className="column left">
            <motion.div 
              variants={navVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className="center-nav"
            >
              <Link to="projects" className='link-main'>
                <h3>Projects</h3>
              </Link>
              <Link to="info" className='link-main'>
                <h3>Info</h3>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav> 
      <Footer />
    </div>
  )
}

export default Main;