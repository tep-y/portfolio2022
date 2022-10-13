import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/projects.css';
import elements from '../db.json';
import { Link } from 'react-router-dom';
import BackHome from './BackHome';

const Projects = () => {
  // TODO: implement loader
  // const [loading, setLoading] = useState(true);

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

  // const loaderVariants = {
  //   hidden: {
  //     opacity: 0
  //   },
  //   visible: {
  //     opacity: [0, 1],
  //     transition: {
  //       repeat: 8,
  //       repeatType: 'reverse',
  //       delay: 1,
  //       duration: 1.6,
  //       ease: 'easeInOut'
  //     }
  //   }
  // }

  // const spinnerVariants = {
  //   hidden: {
  //     opacity: 0
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delay: 1,
  //       duration: .6
  //     }
  //   }
  // }

  const handleMouseOver = (i) => {
    setIsHovering(i);
  }

  const handleMouseOut = () => {
    setIsHovering(-1);
  }

  const [isHovering, setIsHovering] = useState(-1);

  return(
    <>
      {/* <div style={{display: loading ? 'block' : 'none', textAlign: 'center', margin: '100px'}}>
        <motion.h5
          variants={loaderVariants}
          initial='hidden'
          animate='visible'
        >
          loading
        </motion.h5>
        <motion.div 
          className='loader'
          variants={spinnerVariants}
          initial='hidden'
          animate='visible'
        >
        </motion.div>
      </div> */}
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