import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
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
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        delay: .3
      }
    }
  }

  const menuVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .5,
        duration: .6
      }
    },
    hover: {
      scale: 1.1
    }
  }

  return(
    <nav>
      <motion.h3 
        className='title'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Hello! My name is Tep.
      </motion.h3>
      <motion.h3 
        className='small-title'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Hi! I'm Tep.
      </motion.h3>
      <input className="checkbox" type="checkbox" name="hamburger menu" />
      <motion.div 
        className="hamburger-lines"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="line line1" ></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </motion.div>
      <div className="sidebar-menu">
        <Link to="projects" className="link"><h3>Projects</h3></Link>
        <Link to="aboutme" className="link"><h3>About Me</h3></Link>
        <Link to="contact" className="link"><h3>Contact</h3></Link>
      </div>
    </nav>
  )
}

export default NavBar;