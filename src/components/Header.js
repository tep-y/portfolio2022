import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const containerVariants = {
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
    }
  }

  return(
    <header>
      <Link to="/">
        <motion.h3 
          className='home-link'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { delay: 10 } }}
        >
          Hello! My name is Tep.
        </motion.h3>
      </Link>
    </header>
  )
}

export default Header;