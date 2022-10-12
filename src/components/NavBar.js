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
    }
  }

  return(
    <nav>
      <motion.h3 
        className='title'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { delay: .8 } }}
      >
        Hello! My name is Tep.
      </motion.h3>
      <input className="checkbox" type="checkbox" name="hamburger menu" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div className="sidebar-menu">
        <Link to="projects" className="link"><h3>Projects</h3></Link>
        <Link to="info" className="link"><h3>About Me</h3></Link>
        <Link to="info" className="link"><h3>Contact</h3></Link>
      </div>
    </nav>
  )
}

export default NavBar;