import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Main = ({backgroundColor}) => {
  useEffect(() => {
    const bodyElm = document.querySelector('body');
    bodyElm.style.backgroundColor = backgroundColor;
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
    <>
      <nav>
        <h3 class="title">Hello! My name is Tep.</h3>
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="sidebar-menu">
          <Link to="projects" class="link"><h3>Projects</h3></Link>
          <Link to="info" class="link"><h3>About Me</h3></Link>
          <Link to="info" class="link"><h3>Contact</h3></Link>
        </div>
        {/* <motion.div 
          variants={navVariants}
          exit='exit'
          className="menu-items"
        >
          <li><Link to="projects">
            <h3>Projects</h3>
          </Link></li>
          <li><Link to="info">
            <h3>Info</h3>
          </Link></li>
        </motion.div> */}
      </nav> 
      <Footer />
    </>
  )
}

export default Main;