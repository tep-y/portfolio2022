import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return(
    <footer>
      <motion.div initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} className="tag-description">
        <h3>Graphic Design & Web Developer</h3>
      </motion.div>
    </footer>
  )
}

export default Footer;