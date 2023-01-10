import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
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
    <footer>
      <motion.div 
        className="tag-description"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>web designer</h2>
      </motion.div>
    </footer> 
  )
}

export default Footer;

