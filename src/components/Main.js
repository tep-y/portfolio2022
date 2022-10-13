import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import NavBar from './NavBar';

const Main = ({backgroundColor}) => {
  useEffect(() => {
    const bodyElm = document.querySelector('body');
    // bodyElm.style.backgroundColor = backgroundColor;
  }, []);

  const navVariants = {
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        delay: 0.6
      }
    }
  }

  return(
    <motion.div 
      class="main-container" 
      animate={{backgroundColor: ['#f7f7f7', '#DFF8EB']}} 
      exit={{backgroundColor: ['#DFF8EB', '#f7f7f7']}}
    >
      <NavBar />
      <Footer />
    </motion.div>
  )
}

export default Main;