import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/projects.css';
import elements from '../db.json';
import { Link } from 'react-router-dom';
import BackHome from './BackHome';

const Projects = () => {
  const [isHovering, setIsHovering] = useState(-1);
  
  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.backgroundColor = "#F7F7F7";
  }, []);

  const titleVariants = { 
    hidden: {
      scale: 1,
      opacity: 0,
      y: 400
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    },
    exit: {
      opacity: 0,
      y: 400,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    }
  };

  const handleMouseOver = (i) => {
    setIsHovering(i);
  }

  const handleMouseOut = () => {
    setIsHovering(-1);
  }

  return(
    <>
      <BackHome />
      <div className="projects-container">
        <div className='projects'>
        { elements && elements.map((element, i) => {

          const isActive = i === isHovering;

          return(
              <Link to={`/projects/${element.title}`} key={element.id} >
                <motion.h2
                  className='link-title'
                  onMouseEnter={() => handleMouseOver(i)}
                  onMouseLeave={handleMouseOut}
                  variants={titleVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                >
                  {element.title}
                </motion.h2>
                
                <div className='image-container'>
                  <motion.img 
                    src={element.image001}
                    alt="image preview" 
                    className="hover-image" 
                    style={{display: isActive ?  'block' : 'none'}}
                    exit={{ opacity: 0, transition: { ease: 'easeOut', duration: 0.6 } }}
                  />
                </div>
              </Link>
              )
            })}
        </div>
      </div>
    </>
  )
};

export default Projects;