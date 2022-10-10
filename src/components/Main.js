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
    <>
      {/* <Header /> */}
      <nav>
        <h3 class="title">Hello! My name is Tep.</h3>
        {/* <motion.div 
          variants={navVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className="menu-items"
        >
          <Link to="projects">
            <h3>Projects</h3>
          </Link>
          <Link to="info">
            <h3>Info</h3>
          </Link>
        </motion.div> */}
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>  
      </nav> 
      <Footer />
    </>
  )
}

export default Main;