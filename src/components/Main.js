import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import NavBar from './NavBar';

const Main = () => {
  return(
    <motion.div 
      className="main-container" 
      animate={{backgroundColor: ['#f7f7f7', '#DFF8EB']}} 
      exit={{backgroundColor: ['#DFF8EB', '#f7f7f7']}}
    >
      <NavBar />
      <Footer />
    </motion.div>
  )
}

export default Main;